$(document).ready(function() {
    const choices = ['home', 'cafe', 'office'];
    
    function playGame(userChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        $('.user-choice').text(`あなた: ${userChoice}`);
        $('.computer-choice').text(`コンピュータ: ${computerChoice}`);
        determineWinner(userChoice, computerChoice);
    }

    function determineWinner(user, computer) {
        let result;
        if (user == computer) {
            result = "引き分け";
        } else if (
            (user == 'home' && computer == 'cafe') ||
            (user == 'cafe' && computer == 'office') ||
            (user == 'office' && computer == 'home')
        ) {
            result = "hotcake";
        } else {
            result = "egg tarte";
        }
        $('.winner').text(result);
    }

    $('.image-container img').on('click', function() {
        const userChoice =$(this).attr('alt');// 画像のalt属性を使ってジャンケンの手を取得
        console.log('Image clicked:', $(this).attr('alt')); // クリックが反応しているか確認
        playGame(userChoice)
    });
});
