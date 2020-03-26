/**
 * xkToast 组件.
 * @param {string} content 提示内容.
 * @param {string} type 弹窗类型, "success" || "caution" || "error" || "info".
 * @param {string} position 弹窗位置, "top" || "center" || "bottom".
 */

import "./toast.css";

function xkToast(content, type, position) {
  type = type || "info";
  position = position || "bottom";

  if (
    type !== "success" &&
    type !== "caution" &&
    type !== "error" &&
    type !== "info"
  ) {
    throw new Error(
      `在使用 xkToast 时必须指定正确的类型: success || error || info`
    );
  }

  // 创建 xkToast 节点.
  const fragment = document.createDocumentFragment();
  const newToast = document.createElement("div");

  newToast.innerHTML = `<span class="toast-text">${content}</span>`;
  newToast.className = `xk-toast move-in-bottom ${type} ${position}`;

  // xkToast 销毁计时器.
  setTimeout(() => {
    newToast.className += " out";
    setTimeout(() => {
      newToast.parentNode.removeChild(newToast);
    }, 380);
  }, 2000);

  fragment.appendChild(newToast);
  document.body.appendChild(fragment);
}

export default {
  // eslint-disable-next-line
  install(Vue, options) {
    Vue.prototype.xkToast = xkToast;
  }
};
