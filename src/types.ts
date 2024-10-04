export interface IRules {
  alert: string;
  annotations: {
    description: string;
    summary: string;
  };
  expr: string;
  for: string;
  labels: {
    severity: string;
  };
}

export interface IAlert {
  name: string;
  rules: IRules[];
}
