export type large_area = {
  code: string,
  name: string,
  service_area: {
    code: string,
    name: string,
  }
  large_service_area: {
    code: string,
    name: string,
  }
}

export type middle_area = {
  code: string,
  name: string,
  large_area: {
    code: string,
    name: string,
  }
  service_area: {
    code: string,
    name: string,
  }
  large_service_area: {
    code: string,
    name: string,
  }
}