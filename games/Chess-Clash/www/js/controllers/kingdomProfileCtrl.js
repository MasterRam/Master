controllers.controller('kingdomProfileCtrl', function($scope,$ionicActionSheet,$cordovaCamera) {
var takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    };
	
	var choosePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    };
	
	
  $scope.showProfileActionsheet = function() {
    
    $ionicActionSheet.show({
      titleText: 'Profile Picture',
      buttons: [
        { text: '<i class="icon ion-camera"></i> Capture Photo' },
        { text: '<i class="icon ion-images"></i> Select Photo' },
      ],
      // destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
		if(index==0)
			takePicture();
		if(index==1)
			choosePicture();
        return true;
      },
      // destructiveButtonClicked: function() {
      //   console.log('DESTRUCT');
      //   return true;
      // }
    });
  };
  
})
