/*eslint-disable */
function updateUniqueItems (argMap) {
   if (argMap instanceof Map){
    for (let [k,v] of argMap){
        if (v===1) {
            argMap.set(k, 100);
        }
    }
   } else {
    throw new Error('Cannot process');
   }
   return argMap;
}