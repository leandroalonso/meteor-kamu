function callHelper(template, helperName, context, args) {
    context = context || {};
    args = args || [];
    return template.__helpers[' ' + helperName].apply(context, args);  
}

describe('Books', function(){
  
  describe('borrowedByMe', function(){
  
    it('should return undefined when the book is not borrowed', function(){
      expect(callHelper(Template.book, 'borrowedByMe')).toBe(undefined);
    }),

    it('should return false when the book is borrowed but not by the current user', function(){
      expect(callHelper(Template.book, 'borrowedByMe', {}, ['any_unique_id'])).toBe(false);
    }),

    it('should return true when the books is borrowed by the current user', function(){ 
      localStorage.setItem('fakeLogin', 'any_other_unique_id');
      expect(callHelper(Template.book, 'borrowedByMe', {}, ['any_other_unique_id'])).toBe(true);
    })

  }) 

});
