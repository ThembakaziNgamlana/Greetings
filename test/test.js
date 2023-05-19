describe('Test my greet function' , function(){
    it("it should return 'Hello,Hlelo' when entered a name 'Hlelo' and selected a language 'English' " , function(){

        assert.equal("Hello, Hlelo", greet("Hlelo"));

       // assert.deepEqual([2,2],[2,2]);
    });

    it("it should return 'Molo,Themby' when entered a name 'Themby' and selected a language 'Isixhosa' " , function(){

        assert.equal("Molo, Themby", greet("Themby"));

       // assert.deepEqual([2,2],[2,2]);
    });

    it("it should return 'Bonjour,Lutho' when etered a name 'Lutho' and selected a language 'french' " , function(){

        assert.equal("Bonjour, Lutho", greet("Lutho"));

       // assert.deepEqual([2,2],[2,2]);
    });

    it("it should return warning message please enter your name , when the name is not entered'" , function(){

        assert.equal('Please enter your name , ' ,greet(""));

       // assert.deepEqual([2,2],[2,2]);
    });
    it("it should return warning message please enter your name , when the name is not entered'" , function(){

        assert.equal('Please select a language , ' ,greet(""));

       // assert.deepEqual([2,2],[2,2]);
    });

});