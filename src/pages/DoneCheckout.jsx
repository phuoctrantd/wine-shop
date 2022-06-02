import React from "react";

function DoneCheckout() {
    const checkout = localStorage.getItem("order")
    ? JSON.parse(localStorage.getItem("order"))
    : []

  return (
    <div>
      <h1 className="text--upper">Đặt Hàng Thành Công!</h1>
    <div className="p-checkout">
      <p>
        Đơn hàng của bạn CHẮC CHẮN đã được chuyển tới hệ thống xử lý đơn hàng
        của Winehourse.</p>
        <p>  Mã đơn hàng của bạn là <h2>{checkout.tracking}</h2></p>
        <p>Trong quá trình xử lý Winehourse sẽ
        liên hệ lại nếu như cần thêm thông tin từ bạn. Ngoài ra Winehourse cũng sẽ
        có gửi xác nhận đơn hàng bằng Email và tin nhắn
      </p>
      </div>
    </div>
  );
}

export default DoneCheckout;
