var sadQuotes = `Life is full of disappointments;
Sometimes, the tears say more than words ever could;
It hurts when you're being ignored by someone whose attention means the world to you;
The worst kind of pain is when you're smiling to stop the tears from falling;
Loneliness and solitude are two different things;
It's hard to forget someone who gave you so much to remember;
You can't keep hurting someone and expect them to keep loving you;
When you care for someone more than they deserve, you get hurt more than you deserve;
The heart was made to be broken;
Sometimes, you have to hold your head up high and pretend everything's okay;
The deepest wounds are often hidden;
When you're happy, you enjoy the music; when you're sad, you understand the lyrics;
It's okay to be a glowstick; sometimes we need to break before we shine;
Behind every sweet smile, there is a bitter sadness;
Tears are words the heart can't express;
The pain never really goes away; you just learn to live with it;
The hardest thing to do is watch the one you love, love someone else;
Trust gets you killed, love gets you hurt, and being real gets you hated;
When you're in love, you expose yourself to being hurt;
Sometimes, the people who are thousands of miles away can make you feel better than the ones right beside you;`;

function GenerateQuotes(){
    var item= sadQuotes.split(';\n');
    var rn= Math.floor(Math.random()*item.length);
    // console.log(item[rn]);
document.getElementById("quote").innerText= item[rn];
}
