let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer 識別子

clearTimeout(timerId);
alert(timerId); // 同じ 識別子 (キャンセル後 null にはなりません)