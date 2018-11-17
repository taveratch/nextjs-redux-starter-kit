interface JSONSerialize<T> {
  fromJSON(json: any): T
}

export default JSONSerialize