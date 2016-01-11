use std::io;
use std::str::FromStr;
use std::cmp::max;

fn main() {
    let testcases:usize = try_parse(&read_line());


    for _ in 0..testcases {
        do_analysis();
    }

}

fn do_analysis() {
    //Discard the array length (not needed)
    let _ = read_line();
    let mut non_contiguous_sum = 0;
    let mut has_positives:bool = false;

    let array:Vec<i64> = as_vec(&read_line());
    let mut largest = array.get_checked(0);
    let mut max_so_far = * array.get_checked(0);
    let mut max_ending_here = * array.get_checked(0);

    if *array.get_checked(0) > 0 {
        non_contiguous_sum += *array.get_checked(0);
    }

    for x in &array[1 .. array.len()] {
        max_ending_here = max(0, max_ending_here  + x);
        max_so_far = max(max_so_far, max_ending_here);

        if *x > 0 {
            non_contiguous_sum += *x;
            has_positives = true;
        }

        if x > largest {
            largest = x
        }
    }

    if has_positives {
        println!("{} {}", max_so_far,  non_contiguous_sum);
    } else {
        println!("{} {}", largest, largest);
   }


}

fn read_line () -> String {
    let mut buffer = String::new();
    let _ = io::stdin().read_line(&mut buffer);

    buffer
}

trait GetChecked <T> {
    fn get_checked (&self, index:usize) -> &T;
}

impl <T> GetChecked <T> for Vec<T> {
    fn get_checked (&self, index:usize) -> &T {
        match self.get(index) {
            Some(n) => n,
            None => panic!("Index out of bounds"),
        }
    }
}

fn as_vec <T: FromStr> (numbers: &str) -> Vec<T> {
    let mut buffer = String::new();
    let mut vec: Vec<T> = Vec::new();

    for c in numbers.trim().chars() {
        match c {
            ' ' => {
                if &buffer == "-" {
                   panic!("the - token must be used in the context of a number");
                }
                vec.push(try_parse(&buffer));
                buffer.clear();
            },
            '0' ... '9' => buffer.push(c),
            '-' => {
                if buffer.is_empty() {
                    buffer.push(c);
                } else {
                   panic!("Invalid placement of - sign");
                }
            },
            _ => panic!("Non number in String"),
        }
    }

    //Handle last iteration of for-loop
    vec.push(try_parse(&buffer));
    vec
}

fn try_parse <T: FromStr> (num: &str) -> T {
    match num.trim().parse::<T>() {
        Ok(n) => n,
        Err(_) => panic!("Could not parse number"),
    }
}
