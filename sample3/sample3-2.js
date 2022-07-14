let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // 探しましょう

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // 次の位置から検索を続けます
}