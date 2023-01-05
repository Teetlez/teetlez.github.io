// use std::path::Path;

// use std::path::PathBuf;

// use rocket::fs::NamedFile;
use rocket::fs::{relative, FileServer};
#[macro_use]
extern crate rocket;

// #[get("/")]
// fn index() -> &'static str {
//     "hello"
// }

// #[get("/<file..>")]
// async fn files(file: PathBuf) -> Option<NamedFile> {
//     NamedFile::open(Path::new("../").join(file)).await.ok()
// }

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", FileServer::from(relative!("../web-files")))
}
