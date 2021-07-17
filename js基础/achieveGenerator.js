/**
 *实现genenrator的自动执行器
 */

function run(gen) {
  let g = gen();

  function next(data) {
    let result = g.next(data);
  }
}
