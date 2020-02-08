if (!window.Color) Color = {};
if (!window.Color.Vision) Color.Vision = {};

let ConfusionLines = {
   "Protanope": {
      x: 0.7465,
      y: 0.2535,
      m: 1.273463,
      yint: -0.073894
   },
   "Deuteranope": {
      x: 1.4,
      y: -0.4,
      m: 0.968437,
      yint: 0.003331
   },
   "Tritanope": {
      x: 0.1748,
      y: 0.0,
      m: 0.062921,
      yint: 0.292119
   }
};

function simulate(image, options) {
   if (!options) {
      options = {};
   }
   let type = typeof options.type == "string" ? options.type : "Normal",
      amount = typeof options.amount == "number" ? options.amount : 1.0,
      canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
   canvas.width = image.width;
   canvas.height = image.height;
   ctx.drawImage(image, 0, 0);
   let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
      data = imageData.data;
   // Apply simulation
   let line, confuse_x, confuse_y, confuse_m, confuse_yint;
   switch (type) {
      case "Normal":
         document.body.appendChild(canvas);
         return;
      case "Achromatope":
         for (let id = 0, length = data.length; id < length; id += 4) {
            let sr = data[id], // source-pixel
               sg = data[id + 1],
               sb = data[id + 2],
               // convert to Monochrome using sRGB WhitePoint
               dr = (sr * 0.212656 + sg * 0.715158 + sb * 0.072186), // destination-pixel
               dg = dr,
               db = dr;
            // Anomylize colors
            dr = sr * (1.0 - amount) + dr * amount;
            dg = sg * (1.0 - amount) + dg * amount;
            db = sb * (1.0 - amount) + db * amount;
            // Record values
            data[id] = dr >> 0;
            data[id + 1] = dg >> 0;
            data[id + 2] = db >> 0;
         }
         // Record data
         ctx.putImageData(imageData, 0, 0);
         document.body.appendChild(canvas);
         return;
      case "Custom":
         confuse_x = options.x;
         confuse_y = options.y;
         confuse_m = options.m;
         confuse_yint = options.yint;
         break;
      default:
         line = ConfusionLines[type];
         confuse_x = line.x;
         confuse_y = line.y;
         confuse_m = line.m;
         confuse_yint = line.yint;
         break;
   }
   // Simulate: Protanope, Deuteranope, or Tritanope
   for (let id = 0, length = data.length; id < length; id += 4) {
      let sr = data[id], // source-pixel
         sg = data[id + 1],
         sb = data[id + 2],
         dr = sr, // destination-pixel
         dg = sg,
         db = sb;
      // Convert source color into XYZ color space
      let pow_r = Math.pow(sr, 2.2),
         pow_g = Math.pow(sg, 2.2),
         pow_b = Math.pow(sb, 2.2);
      let X = pow_r * 0.412424 + pow_g * 0.357579 + pow_b * 0.180464, // RGB->XYZ (sRGB:D65)
         Y = pow_r * 0.212656 + pow_g * 0.715158 + pow_b * 0.0721856,
         Z = pow_r * 0.0193324 + pow_g * 0.119193 + pow_b * 0.950444;
      // Convert XYZ into xyY Chromacity Coordinates (xy) and Luminance (Y)
      let chroma_x = X / (X + Y + Z);
      let chroma_y = Y / (X + Y + Z);
      // Generate the â€œConfusion Line" between the source color and the Confusion Point
      let m = (chroma_y - confuse_y) / (chroma_x - confuse_x); // slope of Confusion Line
      let yint = chroma_y - chroma_x * m; // y-intercept of confusion line (x-intercept = 0.0)
      // How far the xy coords deviate from the simulation
      let deviate_x = (confuse_yint - yint) / (m - confuse_m);
      let deviate_y = (m * deviate_x) + yint;
      // Compute the simulated colorâ€™s XYZ coords
      X = deviate_x * Y / deviate_y;
      Z = (1.0 - (deviate_x + deviate_y)) * Y / deviate_y;
      // Neutral grey calculated from luminance (in D65)
      let neutral_X = 0.312713 * Y / 0.329016;
      let neutral_Z = 0.358271 * Y / 0.329016;
      // Difference between simulated color and neutral grey
      let diff_X = neutral_X - X;
      let diff_Z = neutral_Z - Z;
      diff_r = diff_X * 3.24071 + diff_Z * -0.498571; // XYZ->RGB (sRGB:D65)
      diff_g = diff_X * -0.969258 + diff_Z * 0.0415557;
      diff_b = diff_X * 0.0556352 + diff_Z * 1.05707;
      // Convert to RGB color space
      dr = X * 3.24071 + Y * -1.53726 + Z * -0.498571; // XYZ->RGB (sRGB:D65)
      dg = X * -0.969258 + Y * 1.87599 + Z * 0.0415557;
      db = X * 0.0556352 + Y * -0.203996 + Z * 1.05707;
      // Compensate simulated color towards a neutral fit in RGB space
      let fit_r = ((dr < 0.0 ? 0.0 : 1.0) - dr) / diff_r;
      let fit_g = ((dg < 0.0 ? 0.0 : 1.0) - dg) / diff_g;
      let fit_b = ((db < 0.0 ? 0.0 : 1.0) - db) / diff_b;
      let adjust = Math.max( // highest value
         (fit_r > 1.0 || fit_r < 0.0) ? 0.0 : fit_r,
         (fit_g > 1.0 || fit_g < 0.0) ? 0.0 : fit_g,
         (fit_b > 1.0 || fit_b < 0.0) ? 0.0 : fit_b
      );
      // Shift proportional to the greatest shift
      dr = dr + (adjust * diff_r);
      dg = dg + (adjust * diff_g);
      db = db + (adjust * diff_b);
      // Apply gamma correction
      dr = Math.pow(dr, 1.0 / 2.2);
      dg = Math.pow(dg, 1.0 / 2.2);
      db = Math.pow(db, 1.0 / 2.2);
      // Anomylize colors
      dr = sr * (1.0 - amount) + dr * amount;
      dg = sg * (1.0 - amount) + dg * amount;
      db = sb * (1.0 - amount) + db * amount;
      // Return values
      data[id] = dr >> 0;
      data[id + 1] = dg >> 0;
      data[id + 2] = db >> 0;
   }
   // Record data
   ctx.putImageData(imageData, 0, 0);
   if (typeof options.callback == "function") {
      options.callback(canvas);
   }
}