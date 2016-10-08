'use strict';
angular.module('music.services',[])
    .factory('musicServices', ['$http',function ($http) {
        var self = this;
        // Default guest
        var user = {"token":"-Wf-X9MMn5hgSz7Rq3nxyg7iXiERvA6dmRFZvVUtpk8Q"};
        self.getDataSearch = function (textSearch, fileWav, playStatus) {
            return $http({
                headers: {'Content-Type': 'application/json'},
                method: 'GET',
                url: 'http://pos.onstaging.xyz/songs?token='+user.token+'&keywords='+textSearch
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                if(fileWav){
                    return dataSample["voice"];
                }
                if(dataSample[textSearch]){
                    return dataSample[textSearch];
                }else {
                    return dataSample["err"];
                }
                return "";
            });
        };

        var dataSample = {
            "BXH": {
                "songs": [
                    "http://api.mp3.zing.vn/api/mobile/download/song/LGJGTLGNADNNDNETLDJTDGLG",
                    "http://api.mp3.zing.vn/api/mobile/download/song/LGJGTLGNVNANEVXTLDJTDGLG"
                ]
            },
            "truong vu": {
                "intent": "Play",
                "playlist": [
                    {
                        title: "Trở Về Cát Bụi",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/6e73ab1bc2feae18c70efcbc367e5ff6/57ecf45e/Singer_Audio5/TroVeCatBui-TruongVu-2452532.mp3"
                    },
                    {
                        title: "Nghèo",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://c34.vdc.nixcdn.com/3e3b00f9fd7d790e2e30e9e384b4cda2/57ecf45e/Singer_Audio5/Ngheo-TruongVu-2435485.mp3"
                    },
                    {
                        title: "Chuyện Tình Mộng Thường ",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/40e232c4bd1424e0a5e5ec121397e2ae/57ecf45e/NhacCuaTui086/ChuyenTinhMongThuong-TruongVu_hafa.mp3"
                    },
                    {
                        title: "Gửi Anh Xa Nhớ",
                        artist: "Bích Phương",
                        poster: "img/b0.jpg",
                        src: "http://s82.stream.nixcdn.com/c9a56dcb6aace7f5ec1f33163f1d90ae/57e3570d/NhacCuaTui925/GuiAnhXaNho-BichPhuong-4539289.mp3"
                    },
                    {
                        title: "Đổi Thay 3",
                        artist: "Hồ Quang Hiếu",
                        poster: "img/b0.jpg",
                        src: "http://f9.stream.nixcdn.com/db5e87e036c70715d854627a19ac171c/57ecf45e/NhacCuaTui926/DoiThay-HoQuangHieu-4563803.mp3"
                    }
                ]
            },
            "voice": {
                "intent": "Play",
                "playlist": [
                    {
                        title: "Chuyện Tình Mộng Thường",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/40e232c4bd1424e0a5e5ec121397e2ae/57ecf45e/NhacCuaTui086/ChuyenTinhMongThuong-TruongVu_hafa.mp3"
                    },
                    {
                        title: "Gửi Anh Xa Nhớ",
                        artist: "Bích Phương",
                        poster: "img/b0.jpg",
                        src: "http://s82.stream.nixcdn.com/c9a56dcb6aace7f5ec1f33163f1d90ae/57e3570d/NhacCuaTui925/GuiAnhXaNho-BichPhuong-4539289.mp3"
                    },
                    {
                        title: "Đổi Thay 3",
                        artist: "Hồ Quang Hiếu",
                        poster: "img/b0.jpg",
                        src: "http://f9.stream.nixcdn.com/db5e87e036c70715d854627a19ac171c/57ecf45e/NhacCuaTui926/DoiThay-HoQuangHieu-4563803.mp3"
                    }
                ]
            },
            "err": {
                "intent": "Play",
                "playlist": []
            }
        };


        return self;
    }]);