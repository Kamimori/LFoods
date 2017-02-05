var pageid;
var pageida;
var titlex;
var Introductionx;
var tipsx;
var useridx;
var listtukuri = 0;
var Recipesbirthplcex;
var Numberofpeoplex;
var iinex;
var zairyoucount = 0;
var titlepicturex;
var materialx = [];
var mountx = [];
var countmaterial;
var recipex = [];
var recipey = [];
var picturex = [];
var countrecipe = [];
var logins = "";
/*視聴回数*/
var lookcount = 0;

var currentUser = ncmb.User.getCurrentUser();
if (currentUser) {
  console.log("ログイン中のユーザー: " + currentUser.get("userName"));
  logins1 = currentUser.get("userName");
  logins2 = currentUser.get("userId");
  logins = 1;
} else {
  console.log("未ログインまたは取得に失敗");
  logins = 2;
}
console.log(logins1);

function page1(mono1) {
  zairyoucount = 0;
  listtukuri = 0;
  pageida = mono1.id;
  var pageid = Number(mono1.id);

  recipex.length = 0;
  recipey.length = 0;
  materialx.length = 0;
  mountx.length = 0;

  var material = ncmb.DataStore("material");
  material.equalTo("recipeID", pageid)
    .order("createDate")
    .fetchAll()
    .then(function (results) {
      countmaterial = results.count;
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        materialx.push(object.get("material"));
        mountx.push(object.get("mount"));
        zairyoucount++
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  var recipe = ncmb.DataStore("recipe");
  recipe.order("createDate", true)
  recipe.equalTo("recipeID", pageid)
    .count()
    .fetchAll()
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        recipex.push(object.get("recipe"));
        recipey.push(object.get("picture"));
        listtukuri++;
      }
    })
    .catch(function (err) {
      console.log(err);
    });



  recipepage.equalTo("recipeID", pageid)
    .fetchAll()
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        lookcount = object.get("lookcount") + 1;
        titlex = object.get("title");
        Introductionx = object.get("Introduction");
        tipsx = object.get("tips");
        useridx = object.get("userid");
        Recipesbirthplcex = object.get("Recipesbirthplce");
        Numberofpeoplex = object.get(" Numberofpeople");
        iinex = object.get("iine");
        titlepicturex = object.get("titlepicture");
        object.set("lookcount", lookcount);
        object.update();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  myNav.pushPage('about.html');
}