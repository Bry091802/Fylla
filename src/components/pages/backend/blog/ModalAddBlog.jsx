import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import { Form, Formik } from "formik";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import * as Yup from "Yup";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { imgPath } from "@/components/helpers/functions-general";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";

const ModalAddBlog = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/blog/${itemEdit.blog_aid}` : `/v2/blog`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["blog"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    blog_title: itemEdit ? itemEdit.blog_title : "",
    blog_excerpt: itemEdit ? itemEdit.blog_excerpt : "",
    blog_content: itemEdit ? itemEdit.blog_content : "",
    blog_reading_time: itemEdit ? itemEdit.blog_reading_time : "",
    blog_published_date: itemEdit ? itemEdit.blog_published_date : "",
    blog_category: itemEdit ? itemEdit.blog_category : "",
    blog_author: itemEdit ? itemEdit.blog_author : "",
    blog_title_old: itemEdit ? itemEdit.blog_title : "",
  };
  const yupSchema = Yup.object({
    blog_title: Yup.string().required("Required"),
    blog_excerpt: Yup.string().required("Required"),
    blog_content: Yup.string().required("Required"),
    blog_reading_time: Yup.string().required("Required"),
    blog_published_date: Yup.string().required("Required"),
    blog_category: Yup.string().required("Required"),
    blog_author: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[900px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0 text-body">Add Blog</h5>
            <button onClick={handleClose}>
              <X stroke={"#fff"} />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-[calc(100dvh-56px)] grid grid-rows-[1fr_auto] text-body">
                    <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
                      <div className="grid grid-cols-[1fr_2fr] gap-5">
                        <div className="content">
                          <div className="input-wrap relative group input-photo-wrap h-[150px] mb-7 ">
                            <label htmlFor="">Photo</label>
                            {itemEdit === null ? (
                              <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
                                <ImagePlusIcon
                                  size={50}
                                  strokeWidth={1}
                                  className="opacity-20 group-hover:opacity-50 transition-opacity"
                                />
                                <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                                  Upload Photo
                                </small>
                              </div>
                            ) : (
                              <img
                                src={
                                  itemEdit === null
                                    ? URL.createObjectURL(photo) // preview
                                    : imgPath + "/" + itemEdit?.menu_image // check db
                                }
                                alt="employee photo"
                                className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                              />
                            )}
                            <InputPhotoUpload
                              name="photo"
                              type="file"
                              id="photo"
                              accept="image/*"
                              title="Upload photo"
                              onChange={(e) => handleChangePhoto(e)}
                              onDrop={(e) => handleChangePhoto(e)}
                              className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full`}
                            />
                          </div>

                          <div className="input-wrap">
                            <InputText
                              label="Reading Time"
                              type="text"
                              name="blog_reading_time"
                            />
                          </div>
                          <div className="input-wrap">
                            <InputText
                              label="Published Date"
                              type="date"
                              name="blog_published_date"
                            />
                          </div>

                          <div className="input-wrap">
                            <InputSelect label="Category" name="blog_category">
                              <option value="" hidden>
                                Select Category
                              </option>
                              <option value="branding">Branding</option>
                              <option value="design">Design</option>
                              <option value="boring">Boring</option>
                            </InputSelect>
                          </div>
                          <div className="input-wrap">
                          <InputText
                              label="Author"
                              type="text"
                              name="blog_author"
                            />
                          </div>
                        </div>
                        <div className="info">
                          <div className="input-wrap">
                            <InputText
                              label="Title"
                              type="text"
                              name="blog_title"
                            />
                          </div>
                          <div className="input-wrap">
                            <InputTextArea
                              label="Excerpt"
                              type="text"
                              name="blog_excerpt"
                              className="!h-[15vh] custom-scroll pr-2"
                            />
                          </div>
                          <div className="input-wrap">
                            <InputTextArea
                              label="Content"
                              type="text"
                              name="blog_content"
                              className="!h-[50vh] custom-scroll pr-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-action flex p-4 justify-end gap-3">
                    <button className="btn btn-accent" type="submit">
                      {mutation.isPending && <SpinnerButton />}
                      {itemEdit ? "Save" : "Add"}
                    </button>
                      <button
                        className="btn btn-cancel"
                        onClick={handleClose}
                        type="reset"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddBlog;
