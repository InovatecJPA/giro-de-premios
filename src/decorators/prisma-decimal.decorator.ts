import { Transform } from 'class-transformer';

export function TransformPrismaDecimal() {
  return Transform(({ value }) => {
    // Handle null/undefined
    if (value === null || value === undefined) {
      return 0;
    }
    
    // Handle Prisma Decimal objects
    if (value && typeof value === 'object') {
      if (typeof value.toNumber === 'function') {
        return value.toNumber();
      }
      if (typeof value.toString === 'function') {
        return parseFloat(value.toString());
      }
    }
    
    // Handle primitive values
    return typeof value === 'number' ? value : parseFloat(String(value)) || 0;
  });
}