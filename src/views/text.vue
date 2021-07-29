<template>

</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};


//     console.log('1');
//     setTimeout(function() {
//         console.log('2');
//         process.nextTick(function() {
//             console.log('3');
//         })
//         new Promise(function(resolve) {
//             console.log('4');
//             resolve();
//         }).then(function() {
//             console.log('5')
//         })
//     })
//     process.nextTick(function() {
//         console.log('6');
//     })
//     async function fn() {
//         await fn2();
//         console.log(13);
//     }

//     function fn2() {
//         console.log(14);
//     }
//     fn()
//     new Promise(function(resolve) {
//         console.log('7');
//         resolve();
//     }).then(function() {
//         console.log('8')
//     })

//     setTimeout(function() {
//         console.log('9');
//         process.nextTick(function() {
//             console.log('10');
//         })
//         new Promise(function(resolve) {
//             console.log('11');
//             resolve();
//         }).then(function() {
//             console.log('12')
//         })
//     })
// 1,14,7,13,8,2,4,5,6,11,12,3, 10
</script>

<style>

</style>