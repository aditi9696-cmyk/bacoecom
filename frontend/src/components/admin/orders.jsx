import React, { useEffect, useState } from 'react';
import axios from '../../axiosInstance';
import { toast } from 'react-toastify';

const OrdersList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', description: '', category: '', image: '' });

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/products');
      setProducts(res.data);
    } catch (err) {
      toast.error('Failed to load products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
      toast.success('Product deleted');
      fetchProducts();
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setForm(product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`/products/${editingProduct}`, form);
        toast.success('Product updated');
      } else {
        await axios.post('/products', form);
        toast.success('Product added');
      }
      setEditingProduct(null);
      setForm({ name: '', price: '', description: '', category: '', image: '' });
      fetchProducts();
    } catch (err) {
      toast.error('Error saving product');
    }
  };

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-6 tracking-wide">🛠️ Manage Products</h2>

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 bg-white p-6 rounded-xl shadow">
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border p-2 rounded" required />
        <input type="text" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="border p-2 rounded" required />
        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border p-2 rounded" />
        <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="border p-2 rounded" />
        <input type="text" placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {/* Products Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product._id} className={`transition duration-300 ease-in-out ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:bg-green-50`}>
                <td className="p-3"><img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded" /></td>
                <td className="p-3 font-medium">{product.name}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3 space-x-2">
                  <button onClick={() => handleEdit(product)} className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                  <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
