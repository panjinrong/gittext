  var iever = 0;
  var _jsver = 0;
  /*@cc_on
      _jsver = @_jscript_version;
  @*/
  if (_jsver == 0) {
      // IE11 或者不是 IE
      if (!!window.MSInputMethodContext && !!document.documentMode) {
          iever = 11;
      }
  } else {
      if (_jsver >= 9) {
          iever = _jsver;
      } else if (_jsver == 5.8) {
          iever = 8;
      } else if (_jsver == 5.7 && window.XMLHttpRequest) {
          iever = 7;
      } else if (_jsver == 5.6 || (_jsver == 5.7 && !window.XMLHttpRequest)) {
          iever = 6;
      } else {
          iever = 5;
      }
  }
  
  if (iever > 0) {
    if(iever < 9){
      alert("当前IE版本过低，请升级至IE9以上或更换其它浏览器");
      // alert("当前（以客户版本为准）IE版本是：" + iever);
    }
  } else {
      // alert("当前不是IE浏览器：");
  }