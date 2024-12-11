// Bible verses array
const bibleVerses = [
     "ईश्वरले संसारलाई यति माया गर्नुभयो कि उहाँले आफ्नो एक मात्र छोरा दिनुभयो, जसले विश्वास गर्ने हरेक व्यक्ति च्यापने छैन, तर अनन्त जीवन पाउँछ। (युहन्ना 3:16) For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life. (John 3:16)" ,
     "तपाईंको मुटुमा शान्ति राख्नुहोस्। (यूहन्ना 14:27) Peace I leave with you; my peace I give you. (John 14:27)" ,
     "ईश्वर सँग सबै कुरा सम्भव छ। (मत्ती 19:26) With God, all things are possible. (Matthew 19:26)" ,
     "धन्य छ ती जो शान्ति बनाउँछन्, किनकि तिनीहरू ईश्वरको पुत्र भनिनेछन्। (मत्ती 5:9) Blessed are the peacemakers, for they will be called children of God. (Matthew 5:9)" ,
     "आज यो शहरमा तपाईंका लागि उद्धारको एक बचाउने आएका छन्। (लूका 2:11) Today in the town of David a Savior has been born to you; he is the Messiah, the Lord. (Luke 2:11)" ,
     "प्रभु हाम्रो पनाह र बल हो, संकटमा उत्तम सहायक। (भजन संहिता 46:1) God is our refuge and strength, an ever-present help in trouble. (Psalm 46:1)" ,
     "परमेश्वर हाम्रो प्रकाश र उद्धार हो, हामीलाई डर नलागोस्। (भजन संहिता 27:1) The Lord is my light and my salvation—whom shall I fear? (Psalm 27:1)",
     "(Isaiah 9:6) For to us a child is born, to us a son is given// हाम्रो लागि एउटा बालक जन्मेको छ, हामीलाई एउटा छोरा दिइएको छ।",
     "(Luke 2:10-11)Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you// तर स्वर्गदूतले तिनीहरूलाई भने, 'डराउनुहोस् छैन, म तपाईंलाई सबै मानिसहरूको लागि ठूलो खुशी ल्याउने राम्रो समाचार ल्याएको छु। आज दाउदको शहरमा तपाईंको लागि एक उद्धारक जन्मिएको छ, जो मसीह प्रभु हो।",
      "(John 3:16)For God so loved the world that he gave his one and only Son//ईश्वरले संसारलाई यति माया गर्नुभयो कि उहाँले आफ्नो एक मात्र छोरा दिनुभयो, जसले विश्वास गर्ने हरेक व्यक्ति नष्ट नहोस्, तर अनन्त जीवन पाउँछ।",
     
     
    
    
    ];

// Function to get and display a Bible verse
function getBibleVerse() {
    const userName = document.getElementById("name").value;
    
    if (!userName) {
        alert("Please enter your name first.");
        return;
    }
    
    // Randomly select a Bible verse
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    const randomVerse = bibleVerses[randomIndex];
    
    // Display the message
    const bibleVerseDiv = document.getElementById("bibleVerse");
    bibleVerseDiv.innerHTML = `<p>Hello, <strong>${userName}</strong>! Here's a Bible verse for you:</p><p><em>${randomVerse}</em></p>`;
}
