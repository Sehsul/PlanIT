const { I } = inject();

Before(test => {
  test.retries(0); // retry test 3 times
});
