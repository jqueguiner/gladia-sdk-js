export interface OpenApiJson {
  openapi: string;
  info: {
    title: string;
    version: string;
  };
  paths: Record<PathUrl, PathDef>;
  components: OpenApiJsonComponent;
  security?: unknown;
}

type PathUrl = string;

export interface PathDef {
  get?: PathRequestDef;
  post?: PathRequestDef;
  delete?: unknown;
}

interface PathRequestDef {
  tags?: string[];
  summary: string;
  operationId: string;
  responses: Record<number, PathRequestResponseDef>;
  parameters?: PathRequestParamDef[];
  requestBody?: RequestBodyDef;
  description?: string;
}

interface PathRequestResponseDef {
  description: string;
  content:
    | {
        'application/json': PathRequestResponseContentDef;
      }
    | {
        'image/*': PathRequestResponseContentDef;
      };
  example?: unknown;
  examples?: unknown;
}

interface PathRequestResponseContentDef {
  schema:
    | Record<string, never>
    | {
        $ref: string;
      }
    | {
        type: 'string';
        format: 'binary';
        data_type: string;
      }
    | {
        type: 'object';
        properties: {
          value: RecursivePredictionType;
        };
      }
    | {
        value: RecursivePredictionType;
      }
    | {
        type: 'object';
        properties: {
          prediction: RecursivePredictionType;
          prediction_raw: unknown;
        };
      }
    | {
        type: 'object';
        prediction: 'string' | 'text' | 'number' | 'str';
        prediction_raw: unknown;
      }
    | RecursivePredictionType;
  examples?: unknown;
}

type RecursivePredictionType =
  | {
      type: 'string' | 'text' | 'number' | 'str';
    }
  | { type: 'array'; items: RecursivePredictionType; description?: string }
  | { type: 'object'; properties: Record<string, RecursivePredictionType> }
  | {
      type: 'object';
      properties: { prediction: RecursivePredictionType; prediction_raw: unknown };
    }
  | { type: 'object'; properties: { value: Record<string, RecursivePredictionType> } };

interface PathRequestParamDef {
  required: boolean;
  name: string;
  in: string;
  description?: string;
  schema:
    | {
        title: string;
        type: 'integer';
        default: number;
        description?: string;
      }
    | {
        title: string;
        type: 'string';
        enum?: string[];
        default: string;
        description?: string;
      };
}

interface RequestBodyDef {
  required?: boolean;
  content: Record<RequestBodyContentType, { schema: RequestBodySchema; example?: unknown }>;
}

interface RequestBodySchema {
  $ref?: string;
  title?: string;
  type?: string;
  default?: string;
  anyOf?: unknown;
}

type RequestBodyContentType = string;

interface OpenApiJsonComponent {
  schemas: Record<
    string,
    {
      title: string;
      required?: string[];
      enum?: string[];
      description?: string;
      type?: string;
      properties?: Record<
        string,
        {
          title?: string;
          text?: string;
          description?: string;
          default?: string | number | boolean;
          format?: 'binary';
          items?: Record<string, unknown>;
          example?: unknown;
          examples?: unknown;
          _examples?: unknown;
          anyOf?: unknown;
          data_type?:
            | 'bool'
            | 'boolean'
            | 'string'
            | 'str'
            | 'text'
            | 'url'
            | 'integer'
            | 'enum'
            | 'int'
            | 'float'
            | 'image'
            | 'video'
            | 'audio'
            | 'list'
            | 'array'
            | 'enum';
        } & ({ type: string } | { allOf?: [{ $ref: string }]; enum?: string[] })
      >;
    }
  >;
  securitySchemes?: unknown;
}
