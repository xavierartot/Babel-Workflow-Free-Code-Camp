// https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
const Simon = (() => {
  const pub = (t) => {
    const r = (t === '') ? t : t;
    return r;
  };
  // private
  const priv = () => {
    console.log('ddddd');
  };

  // main
  const main = () => priv();

  // return an object
  return {
    main,
    pub,
  };
})();
Simon.main();
// Simon.anotherMethod ()
