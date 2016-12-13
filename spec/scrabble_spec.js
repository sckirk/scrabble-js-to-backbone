// spec/scrabble_spec.js

import Scrabble from 'scrabble';


describe('Scrabble', function() {
  var scrabble;
  beforeEach(function() {
    scrabble = new Scrabble();
  });

  // Constructor Testing
  describe('Constructor Testing', function() {
    it('Constructor exists', function() {
      expect(Scrabble).toBeFunction();
    });
  });

  // Testing Score word
  xdescribe('Testing Score for a word', function() {
    it('Function exists', function() {
      expect(Scrabble.score).toBeFunction();
    });

    it('Scores an empty word correctly', function() {
      expect(Scrabble.score('')).toEqual(0);
    });
    it('scores "bob" correctly', function() {
      expect(Scrabble.score('bob')).toEqual(7);
    });
    it('scores 7-letter words', function() {
      expect(Scrabble.score('aaaaaaa')).toEqual(50 + 7);
    });

    //Todo
      // Add testing for invalid words punctuation etc.
  });

  xdescribe('testing highestScoreFrom', function() {
    it('highestScoreFrom exists', function() {
      expect(Scrabble.highestScoreFrom).toBeFunction();
    });
    it('highestScoreFrom picks the highest score from a list of words', function() {
      expect(Scrabble.highestScoreFrom(['aaa', 'bbb', 'abc', 'ppp', 'zzz'])).toEqual('zzz');
      expect(Scrabble.highestScoreFrom(['zzz', 'bbb', 'abc', 'ppp', 'aaa'])).toEqual('zzz');
      expect(Scrabble.highestScoreFrom(['bbb', 'abc', 'zzz', 'ppp', 'aaa'])).toEqual('zzz');
    });
    it('highestScoreFrom considers the 7-letter word score', function() {
      expect(Scrabble.highestScoreFrom(['aaa', 'bbb', 'abc', 'ppp', 'zzz', 'aaaaaaa'])).toEqual('aaaaaaa');
    });
    it('highestScoreFrom if two words have the same score it picks the first', function() {
      expect(Scrabble.highestScoreFrom(['aaa', 'eee'])).toEqual('aaa');
    });
  });

});
