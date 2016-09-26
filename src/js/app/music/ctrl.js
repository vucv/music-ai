app.controller('MusicCtrl',
  ["$sce",'$scope','musicServices', function ($sce, $scope,musicServices) {
    $scope.API = null;
    $scope.active = 0;
    $scope.displaySearchTop= false;
    $scope.audios = [];

    $scope.config = {
        searchData: "",
      // sources: $scope.audios[0].sources,
      // title: $scope.audios[0].title,
      repeat: false,
      shuffle: false,
      autoPlay: true,
      theme: {
        url: "js/app/music/videogular.css"
      }
    };

  $scope.changeSource = function (source) {
      // source should be an array of objects with src and type
      if($scope.config.searchData){
          musicServices.getDataSearch($scope.config.searchData).then(function (data) {
              console.log(data);
              if(data && data.playlist) {
                  $scope.audios = [];
                  $scope.API.stop();
                  data.playlist.forEach(function (playlist) {
                      var audio = {
                          title: playlist.title,
                          artist: playlist.artist,
                          poster: "img/b0.jpg",
                          sources: [
                              {
                                  src: $sce.trustAsResourceUrl(playlist.src),
                                  type: "audio/mpeg"
                              }
                          ]
                      };
                      $scope.audios.push(audio);
                  })

                  $scope.active = 0;
                  $scope.setActive(0);
              }
          });
          $scope.displaySearchTop = true;
      }

  }

    $scope.onPlayerReady = function(API) {
      $scope.API = API;
      if ($scope.API.currentState == 'play' || $scope.isCompleted) $scope.API.play();
      $scope.isCompleted = false;
    };

    $scope.onComplete = function() {
      $scope.isCompleted = true;
      // shuffle
      if($scope.config.shuffle){
        $scope.active = $scope.getRandom($scope.active);
      // next item
      }else{
        $scope.active++;
      }
      
      // last item
      if ($scope.active >= $scope.audios.length) {
        $scope.active = 0;
        // repeat
        if($scope.config.repeat){
          $scope.setActive($scope.active);
        }
      }else{
        $scope.setActive($scope.active);
      }
    };

    $scope.getRandom = function(index){
      var i = Math.floor( Math.random() * $scope.audios.length );
      if ( !(i-index) ){
        i = $scope.getRandom( index );
      }
      return i;
    }

    $scope.play = function(index){
        console.log(index)
      $scope.isCompleted = true;
      // get prev or next item
      index == "next" ? $scope.active++ : $scope.active--;
      if ($scope.active >= $scope.audios.length) $scope.active = 0;
      if ($scope.active == -1) $scope.active = $scope.audios.length - 1;
      // play it
      $scope.setActive($scope.active);
    };

    $scope.setActive = function(index){
      $scope.API.stop();
        $scope.active=index;
        $scope.config.sources = $scope.audios[index].sources;
      $scope.config.title = $scope.audios[index].title;
    };

    $scope.toggleRepeat = function(){
      $scope.config.repeat = !$scope.config.repeat;
      if ($scope.isCompleted) $scope.API.play();
    };

    $scope.toggleShuffle = function(){
      $scope.config.shuffle = !$scope.config.shuffle;
      console.log($scope.API.currentState);
      if ($scope.isCompleted) $scope.API.play();
    };

    // video
    $scope.video = {
      sources: [
        {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.m4v"), type: "video/mp4"},
        {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.webm"), type: "video/webm"},
        {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.ogv"), type: "video/ogg"}
      ],
      theme: {
        url: "js/app/music/videogular.css"
      },
      plugins: {
        controls: {
          autoHide: true,
          autoHideTime: 5000
        },
        poster: "img/c1.jpg"
      }
    };

  }]
);