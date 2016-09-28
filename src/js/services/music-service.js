'use strict';
angular.module('music.services',[])
    .factory('musicServices', ['$http',function ($http) {
        var self = this;

        self.getDataSearch = function (textSearch, fileWav, playStatus) {
            return $http({
                method: 'GET',
                url: '/someUrl',
                data: {
                    playStatus: playStatus,
                    fileWav: fileWav,
                    text: textSearch
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response;
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
                "intent": "Play",
                "playlist": [
                    {
                        title: "Chúng Ta Không Thuộc Về Nhau",
                        artist: "Sơn Tùng M-TP",
                        poster: "img/b0.jpg",
                        src: "http://s82.stream.nixcdn.com/ec6dd81b0736b659de8d466f5a52ddb8/57e3570d/NhacCuaTui925/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3"
                    },
                    {
                        title: "Gửi Anh Xa Nhớ ",
                        artist: "Bích Phương",
                        poster: "img/b0.jpg",
                        src: "http://s82.stream.nixcdn.com/c9a56dcb6aace7f5ec1f33163f1d90ae/57e3570d/NhacCuaTui925/GuiAnhXaNho-BichPhuong-4539289.mp3"
                    }
                ]
            },
            "truong vu": {
                "intent": "Play",
                "playlist": [
                    {
                        title: "Nghèo",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Nghèo Rồi",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Nghèo Nữa",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Nghèo Mãi",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Gửi Anh Xa Nhớ",
                        artist: "Bích Phương",
                        poster: "img/b0.jpg",
                        src: "http://s82.stream.nixcdn.com/c9a56dcb6aace7f5ec1f33163f1d90ae/57e3570d/NhacCuaTui925/GuiAnhXaNho-BichPhuong-4539289.mp3"
                    }
                ]
            },
            "voice": {
                "intent": "Play",
                "playlist": [
                    {
                        title: "Nghèo",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Nghèo Rồi",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Nghèo Nữa",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Nghèo Mãi",
                        artist: "Trường Vũ",
                        poster: "img/b0.jpg",
                        src: "http://aredir.nixcdn.com/ecb22f144fc227591266207bbabb90a0/57e3570d/NhacCuaTui153/Ngheo-TruongVu_34tyv.mp3"
                    },
                    {
                        title: "Gửi Anh Xa Nhớ",
                        artist: "Bích Phương",
                        poster: "img/b0.jpg",
                        src: "http://s82.stream.nixcdn.com/c9a56dcb6aace7f5ec1f33163f1d90ae/57e3570d/NhacCuaTui925/GuiAnhXaNho-BichPhuong-4539289.mp3"
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