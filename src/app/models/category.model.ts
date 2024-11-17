interface Subcategory {
    subcategory_id: number;
    subcategory_name: string;
    subcategory_description: string;
  }
  
  export interface Category {
    category_id: number;
    category_name: string;
    category_description: string;
    subcategories: Subcategory[];
  }
  