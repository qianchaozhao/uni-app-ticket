export default {
  static(path) {
    let isCordova = window.location.protocol.match(/^file/);
    let staticPath = path;
    if (path.match(/^\/static/)) {
      if (isCordova) staticPath = "." + path;
    }
    if (path.match(/^uploads/)) {
      // 图片路径以uploads开始则说明是服务上传的文件，自动加上服务器上传路径
      staticPath = process.env.REST_IP + "/" + path;
    }
    return staticPath;
  },

  // 获取屏幕宽度
  winWidth () {
    return window.innerWidth;
  },

  // 获取屏幕高度
  winHeight () {
    return window.innerHeight;
  },
  test (p1, p2) {
    console.log(p1, p2)
  }
}
