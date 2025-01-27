import { setIsAdd } from '@/components/store/storeAction'
import { StoreContext } from '@/components/store/storeContext'
import { Plus } from 'lucide-react'
import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import SearchBar from '../partials/SearchBar'
import SideNavigation from '../partials/SideNavigation'
import ToastSucess from '../partials/ToastSucess'
import ModalError from '../partials/modals/ModalError'
import ModalValidation from '../partials/modals/ModalValidation'
import BlogTable from './BlogTable'
import ModalAddBlog from './ModalAddBlog'

const Blog = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [itemEdit, setitemEdit] =  React.useState(null);

const handleAdd = () => {
    dispatch(setIsAdd(true));
    setitemEdit(null);
};
  return (
    <>
        <section className="layout-main">
            <div className="layout-div">
                    <SideNavigation menu="foods"/>
                <main>

                    <Header title="Blog" subtitle="Manage List of Blogs"/>
                    <div className="p-8">
                        <div className="flex justify-between items-center">
                            <SearchBar/>
                            <button className="btn btn-add" onClick={handleAdd}>
                            <Plus size={16}/>Add New    
                            </button>
                        </div>
                        <BlogTable setitemEdit={setitemEdit}/>
                    </div>

                        <Footer />
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
        {store.success && <ToastSucess/>}
        
         {store.isAdd && <ModalAddBlog itemEdit={itemEdit}/>}
    </>
  )
}

export default Blog