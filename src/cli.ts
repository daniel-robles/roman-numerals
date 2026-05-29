import { toRoman, fromRoman } from './romanNumerals';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('\n╔════════════════════════════════╗');
  console.log('║   Roman Numeral Converter CLI  ║');
  console.log('╚════════════════════════════════╝\n');

  while (true) {
    console.log('Options:');
    console.log('  1 → Integer to Roman');
    console.log('  2 → Roman to Integer');
    console.log('  q → Quit\n');

    const option = await ask('Choose an option: ');

    if (option === 'q') {
      console.log('\nGoodbye!\n');
      rl.close();
      break;
    }

    if (option === '1') {
      const input = await ask('Enter an integer (1 - 3999): ');
      try {
        const result = toRoman(parseInt(input));
        console.log(`\n  ✓ ${input} → ${result}\n`);
      } catch (e: any) {
        console.log(`\n  ✗ Error: ${e.message}\n`);
      }
    } else if (option === '2') {
      const input = await ask('Enter a Roman numeral: ');
      try {
        const result = fromRoman(input);
        console.log(`\n  ✓ ${input} → ${result}\n`);
      } catch (e: any) {
        console.log(`\n  ✗ Error: ${e.message}\n`);
      }
    } else {
      console.log('\n  Invalid option\n');
    }
  }
}

main();