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
