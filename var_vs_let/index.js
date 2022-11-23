function abc() {
    // function block 
    var a = 5
    function def() {
        // ----------------
        var b = 2
        console.log(a)

        console.log("this is the value of b", b)
        // ----------------------
    }
    {
        let vd = 9
        console.log(vd)
    }
    console.log(vd)
    def()
    console.log(b)

}
abc()