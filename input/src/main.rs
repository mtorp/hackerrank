use std::io;

fn main() {
    let mut reader = io::stdin();
    let mut result = "".to_string();
    let mut input_vector: Vec<Vec<String>> = Vec::new();

    let mut counter = 0;

    while reader.read_line(&mut result).is_ok() {
        let vector: Vec<String> = result.trim().split(" ").map(|x| x.to_owned()).collect();
        input_vector.push(vector);
        if counter > 1 {
            break;
        }
        counter += 1;
    }

    let mut iter_map = input_vector.iter().map(|vec: &Vec<String>| println!("{}", vec[0].parse::<i32>().ok().unwrap() 
                                                 + vec[1].parse::<i32>().ok().unwrap()));

    while iter_map.next().is_some() {} 
    
}

