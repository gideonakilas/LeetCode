var shortestWay = function (source, target) {
   let subs = [];
   let t = 0;

   while (t < target.length) {
      let sub = ''
      for (i in source) {

         if (source[i] == target[t]) {
            sub += source[i];
            t++;
         }
      }
      if (!sub) return -1;
      subs.push(sub);

   }
   return subs.length;
};



console.log(shortestWay('xyz', 'xzyxz'));