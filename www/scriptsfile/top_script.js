var apikey = "167bd3889ca618ceeb77581e5e7fa5091a6baed87d3d9b290d09cd2c8adadedb";
var clientkey = "f2c9c6289d0b4af55423947670269e2861c3905b5f7b324e059291da05992ffe";
var ncmb = new NCMB(apikey, clientkey);
var recipepageTable = ncmb.DataStore("recipepage");
var materialTable = ncmb.DataStore("material");
var recipepage = ncmb.DataStore("recipepage");

var gazoutext = "";
//新着順　新着一覧ページ用
var newpagetitle1 = [];
var newpageuserId1 = [];
var newpageIntroduction1 = [];
var newpagetitlepicture1 = [];
var newpagerecipeID1 = [];
var newpagetitle2 = [];
var newpageuserId2 = [];
var newpageIntroduction2 = [];
var newpagetitlepicture2 = [];
var newpagerecipeID2 = [];
var a = 0;
var aa = 0;
var aaa = 0;
recipepage.order("updateDate", true)
  .fetchAll()
  .then(function (results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      if (i % 2 == 1) {
        newpagetitle2.push(object.get("title"));　
        newpageuserId2.push(object.get("userId"));　
        newpageIntroduction2.push(object.get("Introduction"));
        newpagetitlepicture2.push(object.get("titlepicture"));
        newpagerecipeID2.push(object.get("recipeID"));
        aa++;
      } else {
        newpagetitle1.push(object.get("title"));　
        newpageuserId1.push(object.get("userId"));　
        newpageIntroduction1.push(object.get("Introduction"));
        newpagetitlepicture1.push(object.get("titlepicture"));
        newpagerecipeID1.push(object.get("recipeID"));
        a++;
      }　
      aaa++;
    }
  })
  .catch(function (err) {
    console.log(err);
  });

// カテゴリー用 
//乾パン
var array = [];
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var kann1 = 0;
recipepage.order("recipeID", true)
recipepage.equalTo("Ctegory", 0)
  .fetchAll()
  .then(function (results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];　
      array.push(object.get("title"));　
      array1.push(object.get("userId"));　
      array2.push(object.get("Introduction"));
      array3.push(object.get("titlepicture"));
      array4.push(object.get("recipeID"));　
      kann1++;
    }
  })
  .catch(function (err) {
    console.log(err);
  });

//麺類    
var arraya = [];
var array1a = [];
var array2a = [];
var array3a = [];
var array4a = [];
var menn1 = 0;
recipepage.order("recipeID", true)
recipepage.equalTo("Ctegory", 1)
  .fetchAll()
  .then(function (results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];　
      arraya.push(object.get("title"));　
      array1a.push(object.get("userId"));　
      array2a.push(object.get("Introduction"));
      array3a.push(object.get("titlepicture"));
      array4a.push(object.get("recipeID"));　
      menn1++;
    }
  })
  .catch(function (err) {
    console.log(err);
  });
//缶詰      
var arrayb = [];
var array1b = [];
var array2b = [];
var array3b = [];
var array4b = [];
var ab = 0;
recipepage.order("recipeID", true)
recipepage.equalTo("Ctegory", 2)
  .fetchAll()
  .then(function (results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];　
      arrayb.push(object.get("title"));　
      array1b.push(object.get("userId"));　
      array2b.push(object.get("Introduction"));
      array3b.push(object.get("titlepicture"));
      array4b.push(object.get("recipeID"));　
      ab++;
    }
  })
  .catch(function (err) {
    console.log(err);
  });
//レトルト食品     
var arrayc = [];
var array1c = [];
var array2c = [];
var array3c = [];
var array4c = [];
var ac = 0;
recipepage.order("recipeID", true)
recipepage.equalTo("Ctegory", 3)
  .fetchAll()
  .then(function (results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];　
      arrayc.push(object.get("title"));　
      array1c.push(object.get("userId"));　
      array2c.push(object.get("Introduction"));
      array3c.push(object.get("titlepicture"));
      array4c.push(object.get("recipeID"));　
      ac++;
    }
  })
  .catch(function (err) {
    console.log(err);
  });
//シリアル
var arrayd = [];
var array1d = [];
var array2d = [];
var array3d = [];
var array4d = [];
var ad = 0;
recipepage.order("recipeID", true)
recipepage.equalTo("Ctegory", 4)
  .fetchAll()
  .then(function (results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];　
      arrayd.push(object.get("title"));　
      array1d.push(object.get("userId"));　
      array2d.push(object.get("Introduction"));
      array3d.push(object.get("titlepicture"));
      array4d.push(object.get("recipeID"));　
      ad++;
    }
  })
  .catch(function (err) {
    console.log(err);
  });
//その他      
var arraye = [];
var array1e = [];
var array2e = [];
var array3e = [];
var array4e = [];
var ae = 0;
recipepage.order("recipeID", true)
recipepage.equalTo("Ctegory", 5)
  .fetchAll()
  .then(function (results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];　
      arraye.push(object.get("title"));　
      array1e.push(object.get("userId"));　
      array2e.push(object.get("Introduction"));
      array3e.push(object.get("titlepicture"));
      array4e.push(object.get("recipeID"));　
      ae++;
    }
  })
  .catch(function (err) {
    console.log(err);
  });
//ユーザーID
var logins1 = "";
//ユーザーname
var logins2 = "";
var logins = 0;


// 楽天API用パラメータ
var api = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222';
var applicationId = '1082180769499351274';
var affiliateId = '1552aa63.ee805cfa.1552aa64.2249d1ac';
// 検索キーワード
var keyword = '避難食'; //URLEncode:%E9%81%BF%E9%9B%A3%E9%A3%9F
// 一度に読み込む件数
var itemsPerPage = 20;
// スマホで検索条件を分ける
var carrier = /android|iphone|ipad|ipod/i.test(navigator.userAgent) ? 2 : 1;

ons.bootstrap().controller('MenuController', function ($scope) {
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
  $scope.logins = logins;
}).controller('TopController', function ($scope, $timeout) {
  var getDataCount = 5; // 1回に取得するデータの数
  var sub_getDataCount = 10;
  var allDataCount; // 登録してあるデータの総数
  var fetchTimes; // データベースに通信する回数
  var completedTimes = 0; // 2回目以降で通信完了した回数
  var appendData = []; // 2回目以降
  this.materialName = "フルーツ缶";

  //新着順
  recipepageTable.order("updateDate", true).count().limit(sub_getDataCount)
    .fetchAll().then(function (results) {
      $timeout(function () {
        $scope.new_recipe = results;
      });
    }).catch(function (err) {
      console.log(err);
    });

  //人気順
  recipepageTable.order("iine", true).count().limit(sub_getDataCount)
    .fetchAll().then(function (results) {
      $timeout(function () {
        $scope.pop_recipe = results;
      });
    }).catch(function (err) {
      console.log(err);
    });

  //テーマ別
  materialTable.equalTo("material", this.materialName).fetchAll().then(function (results) {
    for (var i = 0; i < results.length; i++) $scope.obj = results[i].recipeID;
  }).catch(function (e) {
    console.log(e);
  });

  recipepageTable.equalTo("recipeID", $scope.obj)
    .order("updateDate", true).limit(getDataCount - 2).fetchAll().then(function (results) {
      $timeout(function () {
        $scope.week_recipe = results;
      });
    }).catch(function (err) {
      console.log(err);
    });

  //ページ切替
  this.changePage = function (pageName) {
    $scope.isPushing = false;
    if ($scope.isPushing) return;
    $scope.isPushing = true;
    $scope.myNav.pushPage(pageName, {
      animation: 'slide',
      onTransitionEnd: function () {
        $scope.isPushing = false;
      }
    });
  }

  this.changeSearch = function () {
    this.changePage("search.html");
  }
}).controller('ShopCtrl', function ($scope, $http, $location, $anchorScroll) {
  this.currentPage = 1;
  this.itemsPerPage = itemsPerPage;

  $scope.shop_categorys = [
    {
      name: "避難食",
      id: "0"
    },
    {
      name: "缶詰",
      id: "1"
    },
    {
      name: "レトルト",
      id: "2"
    },
    {
      name: "飲み物",
      id: "3"
    }
	];
  this.shop_category = $scope.shop_categorys[0];

  this.callAPI = function () {
      // APIコール用のパラメータ
    var params = {
      applicationId: applicationId,
      affiliateId: affiliateId,
      hits: itemsPerPage,
      page: this.currentPage,
      carrier: carrier,
      formatVersion: 2,
      imageFlag: 1,
      callback: 'JSON_CALLBACK',
      format: 'json',
      sort: 'standard',
      keyword: this.shop_category.name
    };
    // APIをコールする
    $http.jsonp(api, {
      params: params
    }).success(function (result) {
      $scope.items = result.Items;
      $scope.totalItems = result.count;
    });
  }
    // APIを呼び出す
  this.callAPI()
  this.loading = true;
  this.shopload = false;

  this.selectChange = function () {
    this.callAPI();
  }

  this.Pagination = function (pages) {
    if (pages == 1) {
      this.currentPage += 1;
    } else if (pages == 0) {
      this.currentPage -= 1;
    }
    $location.hash("wrap");
    $anchorScroll();
    this.callAPI();
  }
}).controller('WeekController', function ($scope, $timeout) {
  //テーマ別
  materialTable.equalTo("material", this.materialName).fetchAll().then(function (results) {
    for (var i = 0; i < results.length; i++) $scope.obj = results[i].recipeID;
  }).catch(function (e) {
    console.log(e);
  });

  recipepageTable.equalTo("recipeID", $scope.obj)
    .order("updateDate", true).limit(10).fetchAll().then(function (results) {
      $timeout(function () {
        $scope.week_recipe = results;
      });
    }).catch(function (err) {
      console.log(err);
    });
}).controller('searchController', function ($scope, $timeout) {
  materialTable.equalTo("material", $scope.searchText).fetchAll().then(function (results) {
    for (var i = 0; i < results.length; i++) $scope.obj = results[i].recipeID;
    console.log($scope.searchText)
  }).catch(function (e) {
    console.log(e);
  });

  recipepageTable.equalTo("recipeID", $scope.obj)
    .order("updateDate", true).fetchAll().then(function (results) {
      $timeout(function () {
        $scope.search_recipe = results;
      });
    }).catch(function (err) {
      console.log(err);
    });
}).controller('detailController', function ($scope) {
  $scope.load = function (page) {
    $scope.mySplitterContent.load(page)
  }
  $scope.open = function () {
    $scope.mySplitterSide.open();
  }
  $scope.logins = logins;
  console.log(logins1);
  //最終画面表示
  ons.ready(function () {
    myNav.on('postpush', function (e) {
      $("#msg").text(titlex);
      $("#tips1").text(tipsx);
      $("#oitati").text(Recipesbirthplcex);
      $("#monzi").text(Introductionx);
      $("p#idpage").text("ページID:" + pageida);
      $("div#listtukurikata").empty();
      $("#zairyou1").empty();
      $("#ryou1").empty();
      $("img#image1").attr("src", "https://mb.api.cloud.nifty.com/2013-09-01/applications/uOmSwnvYwYbF1ekU/publicFiles/" + titlepicturex);
      var count = 0;
      for (var x = 1; x <= listtukuri; x++) {
        if (x == 1 && recipey[count] != "") {
          $("#listtukurikata").append('<span style="width:100%;"><div><ons-list-header>作り方</ons-list-header><ons-list><ons-list-item class="itemo"><ons-row><ons-col width="10%"><p>1</p></ons-col> <ons-col width="60%"><span><p>' + recipex[count] + '</p></span></ons-col><ons-col width="30%"><img src="https://mb.api.cloud.nifty.com/2013-09-01/applications/uOmSwnvYwYbF1ekU/publicFiles/' + recipey[count] + '" class="item-thum2" onerror="this.style.display= none"></img></ons-col></ons-row></ons-list-item></ons-list></div></span>');
          count++;
        } else if (x == 1 && recipey[count] == "") {
          $("#listtukurikata").append('<span style="width:100%;"><div><ons-list-header>作り方</ons-list-header><ons-list><ons-list-item class="itemo"><ons-row><ons-col width="10%"><p>1</p></ons-col> <ons-col width="80%"><span><p>' + recipex[count] + '</p></span></ons-col></ons-col></ons-row></ons-list-item></ons-list></div></span>');
          count++;
        } else if (recipey[count] != "") {
          $("#listtukurikata").append('<span style="width:100%;"><div><ons-list><ons-list-item class="itemo"><ons-row><ons-col width="10%"><p>' + x + '</p></ons-col> <ons-col width="60%"><span><p>' + recipex[count] + '</p></span></ons-col><ons-col width="30%"><img src="https://mb.api.cloud.nifty.com/2013-09-01/applications/uOmSwnvYwYbF1ekU/publicFiles/' + recipey[count] + '" class="item-thum2"></img></ons-col></ons-row></ons-list-item></ons-list></div></span>');
          count++;
        } else {
          $("#listtukurikata").append('<span style="width:100%;"><div><ons-list><ons-list-item class="itemo"><ons-row><ons-col width="10%"><p>' + x + '</p></ons-col> <ons-col width="90%"><span><p>' + recipex[count] + '</p></span></ons-col></ons-row></ons-list-item></ons-list></div></span>');
          count++;
        }
      }
      for (var t = 0; t < zairyoucount; t++) {
        if (t == 0) {
          $("#zairyou1").append('<ons-list-header>材料(1人分)</ons-list-header>');
          $("#ryou1").append('<ons-list-header>量</ons-list-header>');
          $("#zairyou1").append('<ons-list-item><font size="1">' + materialx[t] + '</font></ons-list-item>');
          $("#ryou1").append('<ons-list-item><font size="1">' + mountx[t] + '</font></ons-list-item>');
        } else {
          $("#zairyou1").append('<ons-list-item><font size="1">' + materialx[t] + '</font></ons-list-item>');
          $("#ryou1").append('<ons-list-item><font size="1">' + mountx[t] + '</font></ons-list-item>');
        }
      }
      x = 0;
      count = 1;
    });
  })
}).controller('MyCtrl6', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //新着縦１
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: newpagetitle1[index],
            label: '',
            desc: '',
            rand: newpagetitlepicture1[index],
            recipe: newpagerecipeID1[index]
          };

          $http.get('htps://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = newpageIntroduction1[index];
            itemScope.item.label = newpageuserId1[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 250;
      },
      countItems: function () {
        return a;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('MyCtrl7', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //新着縦2
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: newpagetitle2[index],
            label: '',
            desc: '',
            rand: newpagetitlepicture2[index],
            recipe: newpagerecipeID2[index]
          };

          $http.get('htps://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = newpageIntroduction2[index];
            itemScope.item.label = newpageuserId2[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 250;
      },
      countItems: function () {
        return aa;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('MyCtrl0', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //乾パン
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: array[index],
            label: '',
            desc: '',
            rand: array3[index],
            recipe: array4[index]
          };

          $http.get('htps://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = array2[index];
            itemScope.item.label = array1[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 91;
      },
      countItems: function () {
        return kann1;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('MyCtrl1', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //麺類
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: arraya[index],
            label: '',
            desc: '',
            rand: array3a[index],
            recipe: array4a[index]
          };

          $http.get('htps://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = array2a[index];
            itemScope.item.label = array1a[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 91;
      },
      countItems: function () {
        return menn1;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('MyCtrl2', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //缶詰
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: arrayb[index],
            label: '',
            desc: '',
            rand: array3b[index],
            recipe: array4b[index]
          };

          $http.get('htp<span class="item-label">{{item.label}}</span>s://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = array2b[index];
            itemScope.item.label = array1b[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 91;
      },
      countItems: function () {
        return ab;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('MyCtrl3', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //レトルト食品
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: arrayc[index],
            label: '',
            desc: '',
            rand: array3c[index],
            recipe: array4c[index]
          };

          $http.get('htps://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = array2c[index];
            itemScope.item.label = array1c[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 91;
      },
      countItems: function () {
        return ac;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('MyCtrl4', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //シリアル
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: arrayd[index],
            label: '',
            desc: '',
            rand: array3d[index],
            recipe: array4d[index]
          };

          $http.get('htps://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = array2d[index];
            itemScope.item.label = array1d[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 91;
      },
      countItems: function () {
        return ad;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('MyCtrl5', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.MyDelegate = {
      //その他
      configureItemScope: function (index, itemScope) {
        if (!itemScope.item) {
          itemScope.canceler = $q.defer();
          itemScope.item = {
            title: arraye[index],
            label: '',
            desc: '',
            rand: array3e[index],
            recipe: array4e[index]
          };

          $http.get('htps://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
            timeout: itemScope.canceler.promise
          }).success(function (data) {
            itemScope.item.desc = "";
            itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
          }).error(function () {
            itemScope.item.desc = array2e[index];
            itemScope.item.label = array1e[index]
          });
        }
      },
      calculateItemHeight: function (index) {
        return 91;
      },
      countItems: function () {
        return ad;
      },
      destroyItemScope: function (index, itemScope) {
        itemScope.canceler.resolve();
      }
    };
  }
  ]).controller('mypage', function ($scope) {
  ons.ready(function () {
    myNav.on('postpush', function (e) {
      $scope.name = name;
      $scope.profile = profile;
      $scope.picture = mypicture;
      $scope.title = mytitel;
      $scope.recipeID = myrecipeID;
      $scope.picture1 = okinipicture;
      $scope.title1 = okinititel;
      $scope.recipeID1 = okinirecipeID;
      $scope.$apply();
    });
  })
}).controller('toukou', function ($scope) {
  $scope.colors = [
    {
      name: ''
    },
  ];
  $scope.color = $scope.colors[0];

  $scope.tukus = [
    {
      name: ''
    },
  ];

  $scope.tuku = $scope.tukus[0];

  //Android5.0以上推奨
  //onResumeとonPauseでアプリの復元
  var appState = {
    takingPicture: true,
    imageUri: ""
  };
  var APP_STORAGE_KEY = "exampleAppState";
  var app = {
      //Androidライフサイクルに応答
      initialize: function () {
        this.bindEvents();
      },
      //状態を保存する
      bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
      },
      //アプリケーション開始(フロントエンドから)
      onDeviceReady: function () {
        take_picture = document.getElementById("take-pict");
        get_picture = document.getElementById("get-pict");
        img_send = document.getElementById("form-send");

        take_picture.addEventListener("click", function () {
          appState.takingPicture = true;
          navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback, {
            quality: 80,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI,
            targetWidth: 350, //画像横幅  横と縦の比率保たれる
            targetHeight: 350 //画像縦幅
          });
        });
        //ファイルストアへ画像をupload
        img_send.addEventListener('click', function () {
          return new Promise(function (resolve, reject) {
            //選択ファイル名の取得
            window.resolveLocalFileSystemURL(get_picture.src, function success(fileEntry) {
                console.log("filename: " + fileEntry.fullPath);
                var filename = fileEntry.name;
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                      //ロード完了後処理
                      console.log("readOK");
                      //JavaScriptSDKはblobにしないとmimetypeがtext/plainになる
                      //blobに変換
                      var blob = new Blob([evt.target.result], {
                        type: "image/jpg"
                      });
                      //blob後のファイルサイズ
                      console.log("file size:" + blob.size);
                      //uploadは保存ファイル名,mimetype
                      ncmb.File.upload(filename, blob).then(function (res) {
                        console.log("success upload!");
                        alert("success upload!");
                        resolve(res);
                        gazoutext = filename;
                      }).catch(function (err) {
                        console.log("fail upload!");
                        console.log(err);
                        reject(err);
                      });
                    };
                    reader.readAsArrayBuffer(file);
                  },
                  function () {
                    console.log(error);
                  });
              },
              function () {
                console.log(error);
              });
          });
        });
      },
      //アプリがバックエンドへ移動
      onPause: function () {
        if (appState.takingPicture || appState.imageUri) {
          window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
        }
      },
      //保持されたアプリケーションの呼び出し
      //格納された状態をチェックし、復元する
      onResume: function (event) {
        var storedState = window.localStorage.getItem(APP_STORAGE_KEY);
        if (storedState) appState = JSON.parse(storedState);
        if (!appState.takingPicture && appState.imageUri) {
          get_picture.src = appState.imageUri;
        } else if (appState.takingPicture && event.pendingResult) {
          if (event.pendingResult.pluginStatus === "OK") {
            cameraSuccessCallback(event.pendingResult.result);
          } else {
            cameraFailureCallback(event.pendingResult.result);
          }
        }
      }
    }
    //成功時
  function cameraSuccessCallback(imageUri) {
    appState.takingPicture = false;
    appState.imageUri = imageUri;
    get_picture.src = imageUri;
  }
  //失敗時
  function cameraFailureCallback(error) {
    appState.takingPicture = false;
    console.log(error);
  }
  app.initialize();
});

function login2() {
  var user = new ncmb.User({
    userName: document.getElementById("user_idBox2").value,
    password: document.getElementById("passwordBox2").value
  });
  ncmb.User.login(user)
    .then(function (data) {
      console.log("ログインできました");
      alert("ログインできました");
      location.reload();
    })
    .catch(function (err) {
      // エラー処理
      console.log("ログインできませんでした");
      alert("ログインできませんでした");
    })
};

function logout() {
  ncmb.User.logout();
  console.log("ログアウトしました。");
  alert("ログアウトしました。");
  logins = 2;
}

function login1() {
  var user = new ncmb.User();
  user.set("userName", document.getElementById("user_nameBox1").value)
    .set("userId", document.getElementById("user_idBox1").value)
    .set("password", document.getElementById("passwordBox1").value);

  // 新規登録
  user.signUpByAccount()
    .then(function () {
      // 登録後処理
      console.log('登録成功');
      alert("登録できました");

      var mypage = ncmb.DataStore("mypage");
      var mypage = new mypage();
      mypage.set("userName", document.getElementById("user_nameBox1").value)
      mypage.set("userId", document.getElementById("user_idBox1").value)
      mypage.set("profile", "")
        .save()
        .then(function (gameScore) {
          // 保存後の処理
          console.log("mypage成功");
        })
        .catch(function (err) {
          // エラー処理
          console.log("mypage失敗");
        });

      var mypage1 = ncmb.DataStore("mypage1");
      var mypage1 = new mypage1();
      mypage1.set("userName", document.getElementById("user_nameBox1").value)
      mypage1.set("userId", document.getElementById("user_idBox1").value)
        .save()
        .then(function (gameScore) {
          // 保存後の処理
          console.log("mypage1成功");
        })
        .catch(function (err) {
          // エラー処理
          console.log("mypage1失敗");
        });

      var mypage2 = ncmb.DataStore("mypage2");
      var mypage2 = new mypage2();
      mypage2.set("userName", document.getElementById("user_nameBox1").value)
      mypage2.set("userId", document.getElementById("user_idBox1").value)
        .save()
        .then(function (gameScore) {
          // 保存後の処理
          console.log("mypage2成功");
        })
        .catch(function (err) {
          // エラー処理
          console.log("mypage2失敗");
        });
    })
    .catch(function (err) {
      // エラー処理 
      console.log('登録失敗' + err);
      alert("登録失敗しました");
    });
}

/*マイページ*/
var profile;
var name;
var myrecipeID = [];
var mycount = 0;
var mypicture = [];
var mytitel = [];
var okinirecipeID = [];
var okinicount = 0;
var okinipicture = [];
var okinititel = [];
var ncmb = new NCMB("167bd3889ca618ceeb77581e5e7fa5091a6baed87d3d9b290d09cd2c8adadedb", "f2c9c6289d0b4af55423947670269e2861c3905b5f7b324e059291da05992ffe");

function mypage() {
  var mypage = ncmb.DataStore("mypage");
  mypage.equalTo("userName", logins1)
    .fetchAll()
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        profile = object.get("profile");
        name = object.get("userId");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  //自分投稿レシピ
  var mypage1 = ncmb.DataStore("mypage1");
  mypage1.equalTo("userName", logins1)
    .fetchAll()
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        myrecipeID.push(object.get("myrecipeID"));
        var recipepage = ncmb.DataStore("recipepage");
        recipepage.equalTo("recipeID", myrecipeID[i])
          .fetchAll()
          .then(function (results) {
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              mypicture.push(object.get("titlepicture"));
              mytitel.push(object.get("title"));
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  var mypage2 = ncmb.DataStore("mypage2");
  mypage2.equalTo("userName", logins1)
    .fetchAll()
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        okinirecipeID.push(object.get("okinirecipeID"));
        recipepage.equalTo("recipeID", okinirecipeID[i])
          .fetchAll()
          .then(function (results) {
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              okinipicture.push(object.get("titlepicture"));
              okinititel.push(object.get("title"));
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  myNav.pushPage('mypege.html')
}

function toukou() {
  //レシピ投稿
  var recipeIDnew;
  var apikey = "167bd3889ca618ceeb77581e5e7fa5091a6baed87d3d9b290d09cd2c8adadedb";
  var clientkey = "f2c9c6289d0b4af55423947670269e2861c3905b5f7b324e059291da05992ffe";
  var ncmb = new NCMB(apikey, clientkey);
  var recipepage = ncmb.DataStore("recipepage");
  recipepage.order("recipeID", true)
    .fetch()
    .then(function (results) {　
      recipeIDnew = results.get("recipeID") + 1;　
      var GameScore = ncmb.DataStore("recipepage");
      var gameScore = new GameScore();

      gameScore.set("title", $('#titlea').val())
        .set("recipeID", recipeIDnew)
        .set("Introduction", $('#syoukai1').val())
        .set("Recipesbirthplce", $('#oitati1').val())
        .set("tips", $('#kotu1').val())
        .set("userId", logins2)
        .set("iine", 0)
        .set("lookcount", 0)
        .set("titlepicture", gazoutext)
        .set("Numberofpeople", parseInt($('#u_form3').val()))
        .set("Ctegory", parseInt($('#u_form2').val()))
        .save()
        .then(function (gameScore) {
          // マイページの自分レシピ追加
          var Mypagerecipe = ncmb.DataStore("mypage1");
          var mypagerecipe = new Mypagerecipe();
          mypagerecipe.set("myrecipeID", recipeIDnew)
            .set("UserId", logins2)
            .set("userName", logins1)
            .save()
            .then(function (mypagerecipe) {
              // 保存後の処理

            })
            .catch(function (err) {
              // エラー処理
            });
          //材料　量　追加
          var zairyouhai = [];
          $(".zairyou1").each(function (i, elem) {
            zairyouhai.push($(elem).val());
          });
          var ryouhai = [];
          $(".bunnryou1").each(function (i, elem) {
            ryouhai.push($(elem).val());
          });
          for (var ry = 0; ry < zairyouhai.length; ry++) {
            var Material1 = ncmb.DataStore("material");
            var material1 = new Material1();
            material1.set("recipeID", recipeIDnew)
              .set("material", zairyouhai[ry])
              .set("mount", ryouhai[ry])
              .save()
              .then(function (recipe) {
                // 保存後の処理

              })
              .catch(function (err) {
                // エラー処理
              });
          }

          //作り方追加
          $(".tukurikata1").each(function (i, elem) {
            var Recipe = ncmb.DataStore("recipe");
            var recipe = new Recipe();
            recipe.set("recipeID", recipeIDnew)
              .set("recipe", $(elem).val())
              .set("picture", "写真")
              .save()
              .then(function (recipe) {
                // 保存後の処理

              })
              .catch(function (err) {
                // エラー処理
              });
          });
        })
        .catch(function (err) {
          // エラー処理
        });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function namesave() {
  console.log("ログ1");
  var textareaElements = document.getElementById('my1-textarea');
  var Mypagee1 = ncmb.DataStore("mypage");
  var Mypagee2 = ncmb.DataStore("mypage1");
  var Mypagee3 = ncmb.DataStore("mypage2");
  var Mypagee4 = ncmb.DataStore("");
  Mypagee1.equalTo("userId", logins2)
    .fetch()
    .then(function (results) {
      var object = results;
      console.log(object);
      object.set("userId", textareaElements);
      console.log(object);
      object.update();
    })
    .catch(function (err) {
      console.log(err);
    });

  Mypagee2.equalTo("userId", logins2)
    .fetch()
    .then(function (results) {
      var object = results;
      console.log(object);
      object.set("userId", textareaElements);
      console.log(object);
      object.update();
    })
    .catch(function (err) {
      console.log(err);
    });

  Mypagee3.equalTo("userId", logins2)
    .fetch()
    .then(function (results) {
      var object = results;
      console.log(object);
      object.set("userId", textareaElements);
      console.log(object);
      object.update();
    })
    .catch(function (err) {
      console.log(err);
    });

  recipepageTable.equalTo("userId", logins2)
    .fetchAll()
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        object.set("userId", textareaElements);
        object.update();
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  //ユーザーデータ更新    
  currentUser.set("userId", textareaElements)
    .update()
    .then(function (obj) {
      // 更新がうまくいった時
      console.log("ニックネーム更新成功");
    })
    .catch(function (error) {
      // エラーの時
      console.log("ニックネーム更新失敗");
    });
}

function profilesave() {
  console.log("ログ2");
  var profiles = $('#my2-textarea').val();
  var Mypagex = ncmb.DataStore("mypage");
  Mypagex.equalTo("userName", logins1)
    .fetch()
    .then(function (results) {
      var object = results;
      console.log(object);
      object.set("profile", profiles);
      console.log(object);
      object.update();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function gazou(gazou1) {
  var gazouname = gazou1.getAttribute('name');
  console.log(gazouname);

  //Android5.0以上推奨
  //onResumeとonPauseでアプリの復元
  var appState = {
    takingPicture: true,
    imageUri: ""
  };
  var APP_STORAGE_KEY = "exampleAppState";
  var app = {
      //Androidライフサイクルに応答
      initialize: function () {
        this.bindEvents();
      },
      //状態を保存する
      bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
      },
      //アプリケーション開始(フロントエンドから)
      onDeviceReady: function () {
        take_picture = document.getElementById("take-pict" + gazouname);
        get_picture = document.getElementById("get-pict" + gazouname);
        img_send = document.getElementById("form-send" + gazouname);

        take_picture.addEventListener("click", function () {
          appState.takingPicture = true;
          navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback, {
            quality: 80,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI,
            targetWidth: 350, //画像横幅  横と縦の比率保たれる
            targetHeight: 350 //画像縦幅
          });
        });
        //ファイルストアへ画像をupload
        img_send.addEventListener('click', function () {
          return new Promise(function (resolve, reject) {
            //選択ファイル名の取得
            window.resolveLocalFileSystemURL(get_picture.src, function success(fileEntry) {
                console.log("filename: " + fileEntry.fullPath);
                var filename = fileEntry.name;
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                      //ロード完了後処理
                      console.log("readOK");
                      //JavaScriptSDKはblobにしないとmimetypeがtext/plainになる
                      //blobに変換
                      var blob = new Blob([evt.target.result], {
                        type: "image/jpg"
                      });
                      //blob後のファイルサイズ
                      console.log("file size:" + blob.size);
                      //uploadは保存ファイル名,mimetype
                      ncmb.File.upload(filename, blob).then(function (res) {
                        console.log("success upload!");
                        alert("success upload!");
                        resolve(res);
                        gazoutext = filename;
                      }).catch(function (err) {
                        console.log("fail upload!");
                        console.log(err);
                        reject(err);
                      });
                    };
                    reader.readAsArrayBuffer(file);
                  },
                  function () {
                    console.log(error);
                  });
              },
              function () {
                console.log(error);
              });
          });
        });
      },
      //アプリがバックエンドへ移動
      onPause: function () {
        if (appState.takingPicture || appState.imageUri) {
          window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
        }
      },
      //保持されたアプリケーションの呼び出し
      //格納された状態をチェックし、復元する
      onResume: function (event) {
        var storedState = window.localStorage.getItem(APP_STORAGE_KEY);
        if (storedState) appState = JSON.parse(storedState);
        if (!appState.takingPicture && appState.imageUri) {
          get_picture.src = appState.imageUri;
        } else if (appState.takingPicture && event.pendingResult) {
          if (event.pendingResult.pluginStatus === "OK") {
            cameraSuccessCallback(event.pendingResult.result);
          } else {
            cameraFailureCallback(event.pendingResult.result);
          }
        }
      }
    }
    //成功時
  function cameraSuccessCallback(imageUri) {
    appState.takingPicture = false;
    appState.imageUri = imageUri;
    get_picture.src = imageUri;
  }
  //失敗時
  function cameraFailureCallback(error) {
    appState.takingPicture = false;
    console.log(error);
  }
  app.initialize();
}

function okimiiri() {
  var Okiniiripage = ncmb.DataStore("mypage2");
  Okiniiripage.equalTo("okinirecipeID", parseInt(pageida))
    .fetch()
    .then(function (results) {　
      if (!Object.keys(results).length) {
        var okiniiripage1 = new Okiniiripage();
        okiniiripage1.set("okinirecipeID", parseInt(pageida))
          .set("UserId", logins2)
          .set("userName", logins1)
          .save()
          .then(function (mypagerecipe) {
            // 保存後の処理
            alert("登録完了");
          })
          .catch(function (err) {
            // エラー処理
          });　
      } else {　
        alert("既にお気に入りに登録してあるよ！");　
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function ChangeTab(tabname) {
  // 全部消す
  document.getElementById('rec').style.display = 'none';
  document.getElementById('fav').style.display = 'none';
  // 指定箇所のみ表示
  document.getElementById(tabname).style.display = 'block';
}