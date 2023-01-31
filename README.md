* Khóa học tại đây: https://www.youtube.com/watch?v=hZcAPYhcEmo&list=PLU4OBh9yHE95G_Y1cUVY-5Mc9P-rQBY3F

* Mục lục cụ thể:

10. Chương 11
- Khái niệm directive
- Directive có sẵn của Vue (v-on, v-bind, v-text,...) và directive tự custom
- Các hàm thực thi trong directive tự custom directive
  + bind(el, binding, vnode): One directive is attached
  + inserted(el, binding, vnode): Inserted ịn parent node
  + update(el, binding, vnode, oldVnode): Once component is updated (without children)
  + componentUpdated(el, binding, vnode): Once component is updated (with children)
  + unbind(el, binding, vnode): Once directive is removed
- Truyền một giá trị vào custom directive: v-hightlight="'green'"
- Truyền tham biến (argument) vào custom directive: v-hightlight:background="'green'"
- Directive custom với modifiers(delayed, prevent, ...) ở global và local => Modifier ở dạng mảng
- Sử dụng nhiều modifiers
- Truyền nhiều dữ liệu phức tạp vào directive
11. Chương 12
- Tạo local, global filter: chuyển đổi từ trái sang phải cho đến filter phải cuối cùng (Vue 3 không còn filter)
- Sử dụng filter và computed
- Khái niệm và phạm vi Mixins (chia sẻ cho những thằng còn lại nhưng không nhận chia sẻ từ những thằng còn lại)
- Tạo một mixin local, global cơ bản
- Mixin là một component mở rộng
12. Chương 13
- Hai quá trình của transition: enter và leave
- Thử hiệu ứng fade animation
- Sử dụng appear để cho một đối tượng xuất hiện ngay từ đầu và có hiệu ứng của khối enter
- Sử dụng nhiều class khác nhau bằng thư viện animate.css
- Sử dụng select option với transition, animate
- Transition giữa các element: sử dụng key và mode="out-in" cho các chuyển động
- Javascript animation
13. Chương 14
- Cài đặt vue resource
- Tìm hiểu cơ bản về Firebase
- $GET và $POST dữ liệu firebase
- Setup global vue resource (config link project)
- Interceptor with request, response (Firebase)
- Tùy biến vue resource
14. Chương 15
- Cài đặt vue router  
- Thiết lập route cơ bản
- Route mode và chế độ history cần thiết
- router-link xây dựng thanh menu đơn giản
- Thêm class active khi route hoạt động
- Sử dụng button để chuyển trang
- Truyền param vào trong route
- Lấy param từ trên route xuống
- Theo dõi sự thay đổi của params trên routes
- Điều hướng route con
- Sử dụng route name cho linh hoạt thay vì sử dụng path
- Sử dụng route query, multi + transition router-view
- Redirect tới một trang khác
- Xử lý lỗi khi route thất bại
- Kết hợp hash fragment với scrollbehavior
- Guard trong Vue
- Lazy load để tối ưu thời gian load của route
15. Chương 16
- Cài đặt vuex
- Sử dụng vuex giải quyết bài toán tăng giảm số lượng thay vì sử dụng emit, prop
- Chú ý về central state
- Lấy dữ liệu bằng gettters và sử dụng mapGetters, mutations và mapMutations, actions và mapActions
- Sử dụng v-model trong vuex
- Phân chia cấu trúc qua modules
