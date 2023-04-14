const { ccclass, property } = cc._decorator;

@ccclass
export default class NetworkManager extends cc.Component {
  private static _instance: NetworkManager = null;

  private url = "";

  public static get instance(): NetworkManager {
    if (!NetworkManager._instance) {
      NetworkManager._instance = new NetworkManager();
    }
    return this._instance;
  }
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  sendMessage(score, usrAccount) {
    var httpRequest = new XMLHttpRequest(); //第一步：创建需要的对象
    httpRequest.open("POST", "url", true); //第二步：打开连接

    /**
     *发送json格式文件必须设置请求头 ；如下 -
     */
    httpRequest.setRequestHeader("Content-type", "application/json"); //设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）

    var obj = { name: "zhansgan", age: 18 };

    httpRequest.send(JSON.stringify(obj)); //发送请求 将json写入send中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
      //请求后的回调接口，可将请求成功后要执行的程序写在其中
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //验证请求是否发送成功
        var json = httpRequest.responseText; //获取到服务端返回的数据
        console.log(json);
      }
    };
  }

  getMessage() {
    var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
    httpRequest.open("GET", "url", true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText; //获取到json字符串，还需解析
        console.log(json);
      }
    };
  }

  /**
   * 延迟多久没回复就返回False
   *
   * @type {number}
   * @memberof DriveManager
   */
  
  private static TimeOut: number = 200;

  /**
   * GET请求
   *
   * @static
   * @param {*} url
   * @param {object} [params={}]
   * @param {*} callback
   * @memberof HttpUtil
   */
  public static GET(url, params: object = {}, callback) {
    let dataStr = "";
    Object.keys(params).forEach((key) => {
      dataStr += key + "=" + encodeURIComponent(params[key]) + "&";
    });
    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
    // url = HttpUtil.baseUrl + url;

    let xhr = cc.loader.getXMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        let response = xhr.responseText;
        if (xhr.status >= 200 && xhr.status < 300) {
          let httpStatus = xhr.statusText;
          // callback(true, JSON.parse(response));
          callback(true, response);
        } else {
          callback(false, response);
        }
      }
    };
    xhr.timeout = this.TimeOut;
    xhr.send();
  }

  /**
   * POST请求
   *
   * @static
   * @param {*} url
   * @param {object} [param={}]
   * @param {*} callback
   * @memberof HttpUtil
   */
  public static POST(url, param: object = {}, callback) {
    // url = HttpUtil.baseUrl + url;
    var xhr = cc.loader.getXMLHttpRequest();
    let dataStr = "";
    Object.keys(param).forEach((key) => {
      dataStr += key + "=" + encodeURIComponent(param[key]) + "&";
    });
    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
    }
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        let response = xhr.responseText;
        if (xhr.status >= 200 && xhr.status < 300) {
          let httpStatus = xhr.statusText;
          // callback(true, JSON.parse(response));
          callback(true, response);
        } else {
          callback(false, response);
        }
      }
    };
    xhr.send(dataStr);
  }

  // update (dt) {}
}
