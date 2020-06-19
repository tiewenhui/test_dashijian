$(function () {
  // 点击‘去注册账号’链接
  $('#link_reg').on('click', function () {
    $('.login-box').hide()
    $('.reg-box').show()
  })
  //点击去‘登录’链接
  $('#link_reg').on('click', function () {
    $('.login-box').show()
    $('.reg-box').hide()
  })
})