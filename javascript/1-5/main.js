function createJuice(fruits) {
    const juice = fruits + "ジュース";
    console.log(fruits + "を受け取りました。ジュースにして返します");
    return juice;
}

const receivedFruit = "オレンジ";
const juiceResult = createJuice(receivedFruit);
console.log(juiceResult + "が届きました");

