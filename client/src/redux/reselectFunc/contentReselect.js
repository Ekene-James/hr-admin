import { createSelector } from "reselect";

const selectCourses= state => state.course;
export const selectCourse = createSelector(
    [selectCourses],
    course => course.course
  );
export const selectPlaylist = createSelector(
    [selectCourses],
    course => course.playlist
  );
export const selectVideo = createSelector(
    [selectCourses],
    course => course.video
  );