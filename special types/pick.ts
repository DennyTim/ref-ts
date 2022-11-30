type Vector3 = { x: number, y: number, z: number };
type Vector2 = Pick<Vector3, 'x' | 'y'>;

// your own 
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
type Vector1 = MyPick<Vector3, 'x'>;

const data: Vector1 = {
  x: 33
}