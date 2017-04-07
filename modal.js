+(function() {
  var _Modal = function(options) {
    options = Object.assign({}, _Modal.DEFAULTS, options || {})
    this.options = options
  }

  _Modal.VERSION = '1.0.0'

  _Modal.DEFAULTS = {
    title: '提示',
    content: '',
    confirmBtnText: '确认',
    confirmBtnHandler: null,
    isNeedConfirmBtn: true,
    cancelBtnText: '取消',
    cancelBtnHandler: null,
    isNeedCancelBtn: true,
    ignoreBackdropClick: false
  }

  _Modal.prototype = {
    Constructor: _Modal,
    init: function() {
      var footerBtn = `<div class="modal-footer">
                        <button type="button" class="btn btn-default btn-cancel">${this.options.cancelBtnText}</button>
                        <button type="button" class="btn btn-primary btn-confirm">${this.options.confirmBtnText}</button>
                      </div>`;
      if (!this.options.isNeedCancelBtn && this.options.isNeedConfirmBtn) {
        footerBtn = `<div class="modal-footer">
                      <button type="button" class="btn btn-primary btn-confirm">${this.options.confirmBtnText}</button>
                    </div>`
      } else if (this.options.isNeedCancelBtn && !this.options.isNeedConfirmBtn) {
        footerBtn = `<div class="modal-footer">
                      <button type="button" class="btn btn-default btn-cancel">${this.options.cancelBtnText}</button>
                    </div>`
      } else if (!this.options.isNeedConfirmBtn && !this.options.isNeedCancelBtn) {
        footerBtn = ''
      }
      var template =
        `<div class="modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                <h4 class="modal-title">${this.options.title}</h4>
              </div>
              <div class="modal-body">
                ${this.options.content}
              </div>
              ${footerBtn}
            </div>
          </div>
        </div>`
      document.body.insertAdjacentHTML('beforeend', template);
      document.body.classList.add('modal-open')
      this.bindEvents()
    },
    bindEvents: function() {
      var _this = this
      // 点击模态窗背景部分关闭弹窗
      if (!this.options.ignoreBackdropClick) {
        var modal = document.querySelector('.modal')
        modal.addEventListener('click', function(e) {
          if (e.target !== modal) return
          _this.closeModal()
        }, false)
      }

      var cancelBtn = document.querySelector('.modal-footer .btn-cancel')
      var confirmBtn = document.querySelector('.modal-footer .btn-confirm')
      cancelBtn && cancelBtn.addEventListener('click', _this.options.cancelBtnHandler || _this.closeModal, false)
      confirmBtn && confirmBtn.addEventListener('click', _this.options.confirmBtnHandler || _this.closeModal, false)

      var closeModalSign = document.querySelector('[data-dismiss="modal"]')
      closeModalSign && closeModalSign.addEventListener('click', _this.closeModal, false)
    },
    closeModal: function() {
      var modal = document.querySelector('.modal')
      document.body.removeChild(modal)
      document.body.classList.remove('modal-open')
    }
  }

  window.Modal = function(options) {
    return new _Modal(options)
  }
  window.Modal.close = _Modal.prototype.closeModal

  // event delegate
  // not used yet
  // function addEvent(element, type, selector, handler) {
  //   element.addEventListener(type, function(e) {
  //     var delegateTarget = this,
  //         fireTarget = e.target,
  //         eventTarget;

  //     if (!fireTarget.classList.contains(selector)) {
  //       function findParent(ele) {
  //         if (ele === delegateTarget) return
  //         var parent = ele.parentNode
  //         if (parent.classList.contains(selector)) return parent

  //         findParent(parent)
  //       }
  //       eventTarget = findParent(fireTarget)
  //     }

  //     if (!eventTarget) return false

  //     handler()

  //   }, false)
  // }
})();
