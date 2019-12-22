// var orm = require("../config/orm");

// var burgers = {
//     all: function(cb){
//         orm.all("burgers", function(res) {
//          cb(res);  
//         });
//     }, 
//     create: function(cols, vals, cb){
//       orm.create("burgers", cols, vals, function(res) {
//           cb(res); 
//       });   
//     },
//     update: function(part, side, cd ) {
//         orm.update("burgers", part, side, function(res) {
//             cd(res);
//         });
//     }, 
//     delete: function(side, cd) {
//       orm.delete("burgers", side, function(res){
//         cd(res); 
//       }) ; 
//     }
// }; 
// module.exports = burgers;