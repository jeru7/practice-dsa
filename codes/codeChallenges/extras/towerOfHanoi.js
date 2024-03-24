// Tower of Hanoi
// The Tower of Hanoi is a classic mathematical puzzle or game that involves three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks stacked in ascending order of size on one rod, with the smallest disk on top. The objective of the puzzle is to move the entire stack to another rod, following these simple rules:
// -Only one disk can be moved at a time.
// -Each move consists of taking the top disk from one stack and placing it on top of another stack.
// -No disk may be placed on top of a smaller disk.

// This code is the one on the video of Codevolution
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod)
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'A', 'C', 'B')

// Unfortunately I didn't solved this my self since it's too complicated for me. I just copied the code from codevolution's vid, but I did manage to understand it by tracking the code using paper and pen.
