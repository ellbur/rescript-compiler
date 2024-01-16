
type r = { x?: int }
let x = if Js.Math.random() < 2.0 { None } else { Some(1) }
let r = { x: ?x }

