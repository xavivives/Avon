status.addListener("on-message-send", function (params, context) {
    var result = {
            err: null,
            data: null,
            messages: []
        };

    try {
        result["text-message"] = "You're amazing, indeed fd!";
    } catch (e) {
        result.err = e;
    }



    return result;
});


status.command({
     name: "bye",
     title: "HelloBot",
     description: "Helps you say hello",
     color: "#dd3366",
     preview: function (params) {
             var text = status.components.text(
                 {
                     style: {
                         marginTop: 5,
                         marginHorizontal: 0,
                         fontSize: 14,
                         fontFamily: "font",
                         color: "black"
                     }
                 }, "Hello from the other side!");
             return {markup: status.components.view({}, [text])};
         }
 });
