var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-course-info",
  "level": "1",
  "url": "sec-course-info.html",
  "type": "Subsection",
  "number": "",
  "title": "Course Information",
  "body": " Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "sec-course-info.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "sec-assessments",
  "level": "1",
  "url": "sec-assessments.html",
  "type": "Subsection",
  "number": "",
  "title": "Assessments and Grades",
  "body": " Assessments and Grades    "
},
{
  "id": "notes",
  "level": "1",
  "url": "notes.html",
  "type": "Chapter",
  "number": "1",
  "title": "MATH 1554 Course Notes - Spring 2026",
  "body": " MATH 1554 Course Notes - Spring 2026   These are the course notes for Georgia Tech's MATH 1554 Linear Algebra used during the Spring 2026 semester.  The notes are organized by chapter and section. Each section is it's own HTML page that can be navigated to by using the links below or by using the Contents panel on the left. To return to this page, click the large \"MATH 1554 Course Notes - Spring 2026\" link at the top of any page.  The notes are written in PreTeXt which is a markup language that will meet the upcoming Title II compliancy requirements for Web Content. The notes are intended to be used as guided notes. You can get a PDF of each section's notes by navigating to the HTML page and clicking the printer icon in the top right. This will generate a PDF containing the same content as the webpage, but with spaces inserted to allow for notetaking.  Disclaimer: This is the first time I have used PreTeXt, so please bear with me. The notes are in constant development, so please check back often to see updated content. If you have any feedback or suggestions as you use these notes, please feel free to reach out to me at cwarnock6@gatech.edu .   "
},
{
  "id": "ex1-exams-3",
  "level": "1",
  "url": "ex1-exams-3.html",
  "type": "Handout",
  "number": "",
  "title": "Exam 1, Spring 2026",
  "body": " Exam 1, Spring 2026     Instructions for each exam are as follows:    Show your work and justify your answers for all questions unless stated otherwise.     Orgainze your work in a reasonably neat and coherent way.     Simplify your answers unless explicitly stated otherwise.    Calculators, notes, cell phones, and books are not allowed.    Use dark and clear writing: your exam will be scanned into a digital system.    Exam pages are double sided. Be sure to complete both sides.    Leave a 1 inch border around the edges of exams.    The last page is for scratch work. Please use it if you need extra space.        True \/ False    (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If , then .    Think about whether implies that the vectors are linearly dependent. If they are linearly dependent, then one of them is in the span of the other two. But which one?    It is true that the vectors are linearly dependent, so one of them belongs in the span of the other two, but it doesn't have to be .  Counterexample: Let and . Then , but it is not the case that . Instead we have that .       True   \/   False :   If is an matrix with a pivot in every column, then the linear transformation is onto.    False.    The hypothesis guarantees that is one-to-one, not onto.  Counterexample: Let . Then, has a pivot in every column, but the transformation is not an onto linear transformation.       True   \/   False :   The set of vectors in that satisfy is a plane in .    True.    This is a homogeneous system of one equation in three unknowns that can be represented with the matrix . Since there are two free variables, the solution set is 2-dimensional, so a plane.       True   \/   False :   If is an matrix, then the equation is always consistent.    False.    This can only be true if has a pivot in every row, which is not guaranteed by the hypothesis.  Counterexample: Let . Note that the system has no solution.       True   \/   False :   If has at least two distinct solutions, then has a nontrivial solution.    True.    Since has more than one solution, it must have infinitely many. Therefore, has a free variable. So, there must be a nontrivial solution to .  You can see this directly by letting and be two distinct solutions to . Then we have that and . Thus, is a nontrivial solution to .       True   \/   False :   If is a one-to-one linear transformation and such that , then .    True.    Approach 1: Since is one-to-one, we know that the only solution to is . Since is a solution to , we must have that which implies that .  Apporach 2: Since is a linear transformation and since , we see that which implies that . Since is one-to-one, we have by the function definition of one-to-one that if two outputs are equal, then their inputs must be equal. Therefore, .       True   \/   False :   If and are matrices with the same number of pivots, then and are row equivalent.    False.    Row equivalent matrices do have the same number of pivots, but these pivots must occur in the same columns.  Counterexample: Let and . Note that and both have 2 pivots, but they are not row equivalent since the pivots occur in different columns.       True   \/   False :   If has at most one solution for every , then the columns of are linearly independent.    True.    If has at most one solution for every , then we know that the only solution to is the trivial solution. Therefore, has a pivot in every column. Thus, the columns of must be linearly independent.         (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A system of linear equations with exactly two solutions.    Impossible.    A system of linear equation can only have 0, 1, or infinitely many solutions, never exactly two. Suppose and are two distinct solutions to the system . Let for and note that . So, is a solution to , regardless of the choice of . Hence, having more than one solution forces infinitely many solutions.       Possible   \/   Impossible :   A linear transformation which is one-to-one, but not onto.    Impossible.    Since is one-to-one, we know that the standard matrix of , , has a pivot in every column. Since is a square matrix, it must also have a pivot in every row. Therefore, is onto.       Possible   \/   Impossible :   A matrix such that has infinitely many solutions.    Possible.    Let . Then every vector is a solution to .       Possible   \/   Impossible :   A matrix and two vectors and so that both equations and have solutions, but does not have a solution.    Impossible.    Let be a solution to and let be a solution to . Then we have that . Thus, the equation must have a solution.         (2 points) Let be an matrix. Which statement below is equivalent to “the columns of are linearly independent”? Select only one.    is consistent for every .  has only the trivial solution.  has a pivot in every row.  The columns of span .     Option (b) is correct.    Option (a) is not correct. Note the matrix has linearly independent columns, but it is not the case that is consistent for every .  Option (b) is correct. If the columns of are linearly independent, then we know that doesn't have any free variables. So, there can only be the trivial solution to   Option (c) is not correct. The same counterexample from Option (a) gives a matrix that has linearly independent columns, but it does not have a pivot in every row.  Option (d) is not correct. The same counterexample from Option (a) gives a matrix that has linearly independent columns, but the columns do not span .        (4 points) Let Which of the following statements are true? Select all that apply.   is in echelon form (REF).  is in reduced row echelon form (RREF).  is an augmented matrix of a linear system with 3 equations and 4 variables.  is an augmented matrix of a consistent linear system.      Options (a) and (d) are correct.    Option (a) is correct since has its nonzero leading entries in each row to the left of the nonzero leading entries of the rows below them AND all rows of zeros are at the bottom (there are none) AND there are zeros below each pivot position.  Option (b) is not correct since there are not 1's in the pivot positions.  Option (c) is not correct since the system only has three variables because there are only three columns to the left of the augmentation line.  Option (d) is correct since we are in REF and we do not have a row of the form , where .      (2 points) Consider the linear system in variables with unknown constants below. Which of the following statements about the solution set are possible? Select all that apply.   The solution set is empty.  The solution set is a single point.  The solution set is a line.  The solution set is a plane.      Options (a) and (d) are possible.    Option (a) is possible. Let and let .  Option (b) is not possible. Notice that . Thus, the system has at least two free variables. Therefore, there is no way to get a unique solution.  Option (c) is not possible. Notice that the system has at least two free variables. Therefore, there is no way to get a line's worth of solutions, which requires exactly one free variable.  Option (d) is possible. Let and .        (3 points) Let be the linear transformation which first reflects vectors about , and then rotates vectors 90 clockwise about the origin. Determine the matrix so that for all .            Recall that .  For , first note that reflecting the vector about the line results in the vector . Then, rotating this vector clockwise about the origin yields the vector . (If you have a hard time seeing this, draw a picture.) Therefore, we have that .  For , first note that reflecting the vector about the line results in the vector . Then, rotating this vector clockwise about the origin yields the vector . (If you have a hard time seeing this, draw a picture.) Therefore, we have that .  It follows that .      (3 points) List the values of that make the vectors below linearly dependent. If no value of makes the vectors linearly dependent, write DNE in the blank. If every value of makes the vectors linearly dependent, write in the blank.        All values of make the vectors dependent, so .    Note that . It follows that the third column of corresponds to a free variable regardless of the choice of . This is because . Therefore, every value of would make the three vectors linearly dependent. Hence, .        (3 points) Find the values of so that is a solution to .        We have , , and .    Note that Setting corresponding entries equal, we find that and .      (4 points) Suppose . Sketch (a) a vector such that is consistent, and (b) the set of solutions to .   Two square grids with horizontal and vertical axes spanning from -4 to 4.      Correct for (a) is a vector drawn in . Correct for (b) is the entire line .    For (a), if has a solution, then must be a linear combination of the columns of . Therefore, . Make sure you draw a single vector, and not the entire line.  For (b), note that . It follows that is a free variable and that . Therefore, we have that the solutions to are Be sure to draw the entire line.        (5 points) Show your work in the space below and put your answer in the boxes.   Consider the following system of linear equations:      Find the augmented matrix that corresponds to the above linear system.              Find the value(s) of for which the system is consistent.            Note that     The system is consistent if and only if which implies that .         (5 points) Show your work in the space below and put your answer in the boxes.   Find all vectors so that the system is consistent, where . Write the vectors in parametric vector form.            Note the following:     By xref , the system is consistent if and only if . We can think of this equation as a system of 1 equation in 3 variables. It follows that and are free variables. Let and . Then, we have that , so .         (7 points) Show your work in the space below and put your answer in the boxes.   Let be the linear tranformation defined by .     What are the domain and codomain of ?       The domain of is and the codomain of is .      What is the standard matrix of ?            Note that .      Find a vector such that , where .       Any particular vector of the form , where can be any real number. For example, setting , we get .    Since , we use row operations on the augmented matrix to solve the system. Note that . We have that is a free variable and and . Thus, all solutions to are . Letting , we have that a particular solution is .       Yes   \/   No :  Is one-to-one?    No.    Note that does NOT have a pivot in every column. Thus, the transformation is NOT one-to-one.       Yes   \/   No :  Is onto?    No.    Note that does NOT have a pivot in every row. Thus, the transformation is NOT onto.      "
},
{
  "id": "ex1-exams-3-3-2",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-3-2",
  "type": "Problem",
  "number": "2.1.1",
  "title": "",
  "body": "  (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If , then .    Think about whether implies that the vectors are linearly dependent. If they are linearly dependent, then one of them is in the span of the other two. But which one?    It is true that the vectors are linearly dependent, so one of them belongs in the span of the other two, but it doesn't have to be .  Counterexample: Let and . Then , but it is not the case that . Instead we have that .       True   \/   False :   If is an matrix with a pivot in every column, then the linear transformation is onto.    False.    The hypothesis guarantees that is one-to-one, not onto.  Counterexample: Let . Then, has a pivot in every column, but the transformation is not an onto linear transformation.       True   \/   False :   The set of vectors in that satisfy is a plane in .    True.    This is a homogeneous system of one equation in three unknowns that can be represented with the matrix . Since there are two free variables, the solution set is 2-dimensional, so a plane.       True   \/   False :   If is an matrix, then the equation is always consistent.    False.    This can only be true if has a pivot in every row, which is not guaranteed by the hypothesis.  Counterexample: Let . Note that the system has no solution.       True   \/   False :   If has at least two distinct solutions, then has a nontrivial solution.    True.    Since has more than one solution, it must have infinitely many. Therefore, has a free variable. So, there must be a nontrivial solution to .  You can see this directly by letting and be two distinct solutions to . Then we have that and . Thus, is a nontrivial solution to .       True   \/   False :   If is a one-to-one linear transformation and such that , then .    True.    Approach 1: Since is one-to-one, we know that the only solution to is . Since is a solution to , we must have that which implies that .  Apporach 2: Since is a linear transformation and since , we see that which implies that . Since is one-to-one, we have by the function definition of one-to-one that if two outputs are equal, then their inputs must be equal. Therefore, .       True   \/   False :   If and are matrices with the same number of pivots, then and are row equivalent.    False.    Row equivalent matrices do have the same number of pivots, but these pivots must occur in the same columns.  Counterexample: Let and . Note that and both have 2 pivots, but they are not row equivalent since the pivots occur in different columns.       True   \/   False :   If has at most one solution for every , then the columns of are linearly independent.    True.    If has at most one solution for every , then we know that the only solution to is the trivial solution. Therefore, has a pivot in every column. Thus, the columns of must be linearly independent.    "
},
{
  "id": "ex1-exams-3-4-1",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-4-1",
  "type": "Problem",
  "number": "2.1.2",
  "title": "",
  "body": "  (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A system of linear equations with exactly two solutions.    Impossible.    A system of linear equation can only have 0, 1, or infinitely many solutions, never exactly two. Suppose and are two distinct solutions to the system . Let for and note that . So, is a solution to , regardless of the choice of . Hence, having more than one solution forces infinitely many solutions.       Possible   \/   Impossible :   A linear transformation which is one-to-one, but not onto.    Impossible.    Since is one-to-one, we know that the standard matrix of , , has a pivot in every column. Since is a square matrix, it must also have a pivot in every row. Therefore, is onto.       Possible   \/   Impossible :   A matrix such that has infinitely many solutions.    Possible.    Let . Then every vector is a solution to .       Possible   \/   Impossible :   A matrix and two vectors and so that both equations and have solutions, but does not have a solution.    Impossible.    Let be a solution to and let be a solution to . Then we have that . Thus, the equation must have a solution.    "
},
{
  "id": "ex1-exams-3-4-3",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-4-3",
  "type": "Problem",
  "number": "2.1.3",
  "title": "",
  "body": "  (2 points) Let be an matrix. Which statement below is equivalent to “the columns of are linearly independent”? Select only one.    is consistent for every .  has only the trivial solution.  has a pivot in every row.  The columns of span .     Option (b) is correct.    Option (a) is not correct. Note the matrix has linearly independent columns, but it is not the case that is consistent for every .  Option (b) is correct. If the columns of are linearly independent, then we know that doesn't have any free variables. So, there can only be the trivial solution to   Option (c) is not correct. The same counterexample from Option (a) gives a matrix that has linearly independent columns, but it does not have a pivot in every row.  Option (d) is not correct. The same counterexample from Option (a) gives a matrix that has linearly independent columns, but the columns do not span .   "
},
{
  "id": "ex1-exams-3-5-1",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-5-1",
  "type": "Problem",
  "number": "2.1.4",
  "title": "",
  "body": "  (4 points) Let Which of the following statements are true? Select all that apply.   is in echelon form (REF).  is in reduced row echelon form (RREF).  is an augmented matrix of a linear system with 3 equations and 4 variables.  is an augmented matrix of a consistent linear system.      Options (a) and (d) are correct.    Option (a) is correct since has its nonzero leading entries in each row to the left of the nonzero leading entries of the rows below them AND all rows of zeros are at the bottom (there are none) AND there are zeros below each pivot position.  Option (b) is not correct since there are not 1's in the pivot positions.  Option (c) is not correct since the system only has three variables because there are only three columns to the left of the augmentation line.  Option (d) is correct since we are in REF and we do not have a row of the form , where .   "
},
{
  "id": "ex1-exams-3-5-2",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-5-2",
  "type": "Problem",
  "number": "2.1.5",
  "title": "",
  "body": "  (2 points) Consider the linear system in variables with unknown constants below. Which of the following statements about the solution set are possible? Select all that apply.   The solution set is empty.  The solution set is a single point.  The solution set is a line.  The solution set is a plane.      Options (a) and (d) are possible.    Option (a) is possible. Let and let .  Option (b) is not possible. Notice that . Thus, the system has at least two free variables. Therefore, there is no way to get a unique solution.  Option (c) is not possible. Notice that the system has at least two free variables. Therefore, there is no way to get a line's worth of solutions, which requires exactly one free variable.  Option (d) is possible. Let and .   "
},
{
  "id": "ex1-exams-3-6-1",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-6-1",
  "type": "Problem",
  "number": "2.1.6",
  "title": "",
  "body": "  (3 points) Let be the linear transformation which first reflects vectors about , and then rotates vectors 90 clockwise about the origin. Determine the matrix so that for all .            Recall that .  For , first note that reflecting the vector about the line results in the vector . Then, rotating this vector clockwise about the origin yields the vector . (If you have a hard time seeing this, draw a picture.) Therefore, we have that .  For , first note that reflecting the vector about the line results in the vector . Then, rotating this vector clockwise about the origin yields the vector . (If you have a hard time seeing this, draw a picture.) Therefore, we have that .  It follows that .   "
},
{
  "id": "ex1-exams-3-6-2",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-6-2",
  "type": "Problem",
  "number": "2.1.7",
  "title": "",
  "body": "  (3 points) List the values of that make the vectors below linearly dependent. If no value of makes the vectors linearly dependent, write DNE in the blank. If every value of makes the vectors linearly dependent, write in the blank.        All values of make the vectors dependent, so .    Note that . It follows that the third column of corresponds to a free variable regardless of the choice of . This is because . Therefore, every value of would make the three vectors linearly dependent. Hence, .   "
},
{
  "id": "ex1-exams-3-7-1",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-7-1",
  "type": "Problem",
  "number": "2.1.8",
  "title": "",
  "body": "  (3 points) Find the values of so that is a solution to .        We have , , and .    Note that Setting corresponding entries equal, we find that and .   "
},
{
  "id": "ex1-exams-3-7-2",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-7-2",
  "type": "Problem",
  "number": "2.1.9",
  "title": "",
  "body": "  (4 points) Suppose . Sketch (a) a vector such that is consistent, and (b) the set of solutions to .   Two square grids with horizontal and vertical axes spanning from -4 to 4.      Correct for (a) is a vector drawn in . Correct for (b) is the entire line .    For (a), if has a solution, then must be a linear combination of the columns of . Therefore, . Make sure you draw a single vector, and not the entire line.  For (b), note that . It follows that is a free variable and that . Therefore, we have that the solutions to are Be sure to draw the entire line.   "
},
{
  "id": "ex1-exams-3-8-1",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-8-1",
  "type": "Problem",
  "number": "2.1.10",
  "title": "",
  "body": "  (5 points) Show your work in the space below and put your answer in the boxes.   Consider the following system of linear equations:      Find the augmented matrix that corresponds to the above linear system.              Find the value(s) of for which the system is consistent.            Note that     The system is consistent if and only if which implies that .    "
},
{
  "id": "ex1-exams-3-9-1",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-9-1",
  "type": "Problem",
  "number": "2.1.11",
  "title": "",
  "body": "  (5 points) Show your work in the space below and put your answer in the boxes.   Find all vectors so that the system is consistent, where . Write the vectors in parametric vector form.            Note the following:     By xref , the system is consistent if and only if . We can think of this equation as a system of 1 equation in 3 variables. It follows that and are free variables. Let and . Then, we have that , so .    "
},
{
  "id": "ex1-exams-3-10-1",
  "level": "2",
  "url": "ex1-exams-3.html#ex1-exams-3-10-1",
  "type": "Problem",
  "number": "2.1.12",
  "title": "",
  "body": "  (7 points) Show your work in the space below and put your answer in the boxes.   Let be the linear tranformation defined by .     What are the domain and codomain of ?       The domain of is and the codomain of is .      What is the standard matrix of ?            Note that .      Find a vector such that , where .       Any particular vector of the form , where can be any real number. For example, setting , we get .    Since , we use row operations on the augmented matrix to solve the system. Note that . We have that is a free variable and and . Thus, all solutions to are . Letting , we have that a particular solution is .       Yes   \/   No :  Is one-to-one?    No.    Note that does NOT have a pivot in every column. Thus, the transformation is NOT one-to-one.       Yes   \/   No :  Is onto?    No.    Note that does NOT have a pivot in every row. Thus, the transformation is NOT onto.    "
},
{
  "id": "ex1-exams-4",
  "level": "1",
  "url": "ex1-exams-4.html",
  "type": "Handout",
  "number": "",
  "title": "Exam 1, Fall 2025",
  "body": " Exam 1, Fall 2025     Instructions for each exam are as follows:    Show your work and justify your answers for all questions unless stated otherwise.     Orgainze your work in a reasonably neat and coherent way.     Simplify your answers unless explicitly stated otherwise.    Calculators, notes, cell phones, and books are not allowed.    Use dark and clear writing: your exam will be scanned into a digital system.    Exam pages are double sided. Be sure to complete both sides.    Leave a 1 inch border around the edges of exams.    The last page is for scratch work. Please use it if you need extra space.        True \/ False    (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If the system has infinitely many solutions, then the columns of are linearly dependent.     having infinite solutions tells us something about the number of pivots and free variables that has.     True. If the system has infinitely many solutions, then must be at least one free variable. So the columns of are linearly dependent.       True   \/   False :   If has a pivot in every row, then the equation must have a unique solution.    Consider some non-square matrices      False . Consider . Then we have the distinct solutions and , among many others.       True   \/   False :   If is a linear transformation that is both one-to-one and onto, then must be a square matrix.    A linear transformation being one-to-one tells you something about the number of pivots in the columns of . A linear transformation being onto tells you something about the number of pivots in the rows of .     True . If is one-to-one, then has a pivot in every column. And if is onto, then has a pivot in every row. The only matrices with pivots in every row and every column are square matrices.       True   \/   False :   The set of vectors in that satisfy is a line in .    Write as a homogenous matrix equation.     True . The set of vectors that satisfy is the solution set of the homogeneous system where . Since has two free variables, the solution set is a plane in . (In particular, it is the plane .)       True   \/   False :   If and are matrices such that and is not the zero matrix, then it must be the case that .    Play around with some matrices.     False . Consider . Then , but .       True   \/   False :   If and are solutions to the inhomogeneous equation , then the vector is not a solution to .    Compute      True . If and are solutions to the inhomogeneous equation , then and . So we have which is not equal to since .       True   \/   False :   If is a matrix such that is consistent for every , then the columns of are linearly independent.    If is consistent for every , then you know something about the pivots of .     True . If is consistent for every , then has a pivot in every row. Since is a square matrix, it must also have a pivot in every column. So the columns of are linearly independent.       True   \/   False :   If and , then .    Draw a picture in .     False . Consider . Then and , but .         (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   Four linearly independent vectors in .    Consider the columns of a matrix.     Impossible . Any matrix has at most 3 pivots, so the columns of any matrix are linearly dependent. So there cannot be four linearly independent vectors in .       Possible   \/   Impossible :   A linear transformation such that and are linearly independent, but and are linearly dependent.    Linear transformations can be thought of as matrices. Consider some different matrices.     Possible . One example is the linear transformation that sends every vector to the zero vector.       Possible   \/   Impossible :   A one-to-one linear transformation such that the homogeneous system has non-trivial solutions.    Play around with some different matrices .     Impossible . A one-to-one linear transformation sends different vectors to different vectors. So if has a non-trivial solution, then there is a non-zero vector such that . But since , this would imply , which is a contradiction.       Possible   \/   Impossible :   A matrix and a vector so that the solutions set of is a single point.    Consider the number of possible pivots in .     Impossible . A matrix can have at most 2 pivots, so the solution set of must have at least one free variable. So the solution set cannot be a single point.         (2 points) Let be a consistent inhomogeneous linear system where     has the only trivial solution.  and .  The solution set of the system is parallel to the solution set of the homogeneous system  If is a solution of , then is the general solution of where is any solution of      Options (b), (c), and (d) are correct.  Option (a) is not correct. is a matrix, so it must have at least one free variable. So the homogeneous system has a non-trivial solution.  Option (b) is correct. Since is a matrix, the vector must be in (i.e a matrix) and therefore the vector must be in .  Option (c) is correct because Option (d) is correct (the vector describes the translation)  Option (d) is correct. This is exactly Theorem 6 from Section 1.5 of Lay 5th Edition.        (2 points) Let be a matrix that has linearly dependent columns. Which of the following are true?   is consistent for every in .  the RREF of has a zero row.  the columns of span .  the system has a free variable      Options (b) and (d) are correct.  Option (a) is not correct. Since has linearly dependent columns, it is missing a pivot in at least one column. But because is square, it cannot have a pivot in every row, which means that is not consistent for every .  Option (b) is correct. As above, is missing a pivot in at least one row, which means that it must have a zero row in its RREF.  Option (c) is not correct. has at most two linearly independent columns, so the columns of cannot span .  Option (d) is correct. As before, is missing a pivot in at least one column, which means that has at least one free variable.      (3 points) Fill in the missing entries so that the vector is a solution to the system       We have the following system of equations:   And we know that is a solution to this system. That is, we have     Solving these equations, we find that , , and .        (3 points) Consider the following system of linear equations.     Suppose the system is written in matrix form as . Express as a linear combination of the columns of .     Expressing the system of equations in augmented matrix form, we have     and so the solution is . Rewriting as a vector equation, we obtain       (4 points) Let and . Find and so that           Computing and , we have    Notice that if we want , then we must have (the matrices must agree in the first row, first column), and (the matrices must agree in the second row, second column). Solving these equations, we find that and .        (3 points) Write a nonzero matrix of size which is in echelon form (REF) and such that the vector is a solution to and such that the vector causes to be consistent.       If must make consistent, try making a column of (why would this work?). Also, consider making the first column of be (this is reasonble since is in echelon form).    One possible matrix is       (2 points) Fill in the blank so that the systems with the two augmented matrices below have the same solution set. and     The missing entry is .           (7 points) Show your work for part (c) in the space below and put your hint in the boxes.   Let be the linear transformation defined by      What are the domain and codomain of ?           takes in vectors with three components and outputs vectors with two components. So the domain is and the codomain is .      Find the matrix such that for all .          Option 1: Notice that Therefore, the matrix is   Option 2: The matrix can also be found by applying to the standard basis vectors and using the results as the columns of . Therefore, the matrix is       Find a vector such that where .          Solving the system of equations given by , or equivalently , we get   which we can now express in parametric vector form as   One simple solution is obtained by setting , which gives       Is one-to-one?    We have proven that a linear transformation is one-to-one if and only if there is a pivot in every column of the standard matrix of the transformation.    No. The standard matrix of does not have a pivot in every column, so is not one-to-one. Another way to see this is from the answer from Part (c); there are multiple solutions to the system , which indicates that is not one-to-one.      Is onto?    We have proven that a linear transformation is onto if and only if there is a pivot in every row of the standard matrix of the transformation.    Yes. The standard matrix of has a pivot in every row, so is onto. Another way to see this is by solving the system for an arbitrary and showing that a solution always exists.         (6 points) Show your work for problems on this page and put your answers in the boxes.   Find all such that the following set of vectors is linearly dependent. For that , find a non-trivial linear combination of the vectors that adds to zero.               We want the matrix to be missing a pivot. (Why?) Once it is missing a pivot, we want to find a nontrivial solution to . (Why?)    Let . Row reducing, we find that   If we want the columns of to be linearly dependent, we need to be missing a pivot in a column. This occurs when , i.e., .  If , then we can row reduce further to find   and writing the general solution in parametric vector form, we get   We can choose any nonzero value of to get a specific linear combination of the vectors that add to zero. Choosing yields one solution of         (6 points) Show your work for part (a) in the space below and put your answers in the boxes.   Consider the linear system of equations where   and      Give the general solution of the system in parametric vector form.          Row reducing the augmented matrix gives   which yields the solution       Let be as defined above. Write down the solution set to the homogeneous system as the span of some number of vectors.        If is consistent with a solution of , then the solution set of is given by where is the solution set of the corresponding homogeneous system .    Since the solution set to is the solution set to must be       "
},
{
  "id": "ex1-exams-4-3-2",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-3-2",
  "type": "Problem",
  "number": "2.1.13",
  "title": "",
  "body": "  (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If the system has infinitely many solutions, then the columns of are linearly dependent.     having infinite solutions tells us something about the number of pivots and free variables that has.     True. If the system has infinitely many solutions, then must be at least one free variable. So the columns of are linearly dependent.       True   \/   False :   If has a pivot in every row, then the equation must have a unique solution.    Consider some non-square matrices      False . Consider . Then we have the distinct solutions and , among many others.       True   \/   False :   If is a linear transformation that is both one-to-one and onto, then must be a square matrix.    A linear transformation being one-to-one tells you something about the number of pivots in the columns of . A linear transformation being onto tells you something about the number of pivots in the rows of .     True . If is one-to-one, then has a pivot in every column. And if is onto, then has a pivot in every row. The only matrices with pivots in every row and every column are square matrices.       True   \/   False :   The set of vectors in that satisfy is a line in .    Write as a homogenous matrix equation.     True . The set of vectors that satisfy is the solution set of the homogeneous system where . Since has two free variables, the solution set is a plane in . (In particular, it is the plane .)       True   \/   False :   If and are matrices such that and is not the zero matrix, then it must be the case that .    Play around with some matrices.     False . Consider . Then , but .       True   \/   False :   If and are solutions to the inhomogeneous equation , then the vector is not a solution to .    Compute      True . If and are solutions to the inhomogeneous equation , then and . So we have which is not equal to since .       True   \/   False :   If is a matrix such that is consistent for every , then the columns of are linearly independent.    If is consistent for every , then you know something about the pivots of .     True . If is consistent for every , then has a pivot in every row. Since is a square matrix, it must also have a pivot in every column. So the columns of are linearly independent.       True   \/   False :   If and , then .    Draw a picture in .     False . Consider . Then and , but .    "
},
{
  "id": "ex1-exams-4-4-1",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-4-1",
  "type": "Problem",
  "number": "2.1.14",
  "title": "",
  "body": "  (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   Four linearly independent vectors in .    Consider the columns of a matrix.     Impossible . Any matrix has at most 3 pivots, so the columns of any matrix are linearly dependent. So there cannot be four linearly independent vectors in .       Possible   \/   Impossible :   A linear transformation such that and are linearly independent, but and are linearly dependent.    Linear transformations can be thought of as matrices. Consider some different matrices.     Possible . One example is the linear transformation that sends every vector to the zero vector.       Possible   \/   Impossible :   A one-to-one linear transformation such that the homogeneous system has non-trivial solutions.    Play around with some different matrices .     Impossible . A one-to-one linear transformation sends different vectors to different vectors. So if has a non-trivial solution, then there is a non-zero vector such that . But since , this would imply , which is a contradiction.       Possible   \/   Impossible :   A matrix and a vector so that the solutions set of is a single point.    Consider the number of possible pivots in .     Impossible . A matrix can have at most 2 pivots, so the solution set of must have at least one free variable. So the solution set cannot be a single point.    "
},
{
  "id": "ex1-exams-4-4-3",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-4-3",
  "type": "Problem",
  "number": "2.1.15",
  "title": "",
  "body": "  (2 points) Let be a consistent inhomogeneous linear system where     has the only trivial solution.  and .  The solution set of the system is parallel to the solution set of the homogeneous system  If is a solution of , then is the general solution of where is any solution of      Options (b), (c), and (d) are correct.  Option (a) is not correct. is a matrix, so it must have at least one free variable. So the homogeneous system has a non-trivial solution.  Option (b) is correct. Since is a matrix, the vector must be in (i.e a matrix) and therefore the vector must be in .  Option (c) is correct because Option (d) is correct (the vector describes the translation)  Option (d) is correct. This is exactly Theorem 6 from Section 1.5 of Lay 5th Edition.   "
},
{
  "id": "ex1-exams-4-5-1",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-5-1",
  "type": "Problem",
  "number": "2.1.16",
  "title": "",
  "body": "  (2 points) Let be a matrix that has linearly dependent columns. Which of the following are true?   is consistent for every in .  the RREF of has a zero row.  the columns of span .  the system has a free variable      Options (b) and (d) are correct.  Option (a) is not correct. Since has linearly dependent columns, it is missing a pivot in at least one column. But because is square, it cannot have a pivot in every row, which means that is not consistent for every .  Option (b) is correct. As above, is missing a pivot in at least one row, which means that it must have a zero row in its RREF.  Option (c) is not correct. has at most two linearly independent columns, so the columns of cannot span .  Option (d) is correct. As before, is missing a pivot in at least one column, which means that has at least one free variable.   "
},
{
  "id": "ex1-exams-4-5-2",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-5-2",
  "type": "Problem",
  "number": "2.1.17",
  "title": "",
  "body": "  (3 points) Fill in the missing entries so that the vector is a solution to the system       We have the following system of equations:   And we know that is a solution to this system. That is, we have     Solving these equations, we find that , , and .   "
},
{
  "id": "ex1-exams-4-6-1",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-6-1",
  "type": "Problem",
  "number": "2.1.18",
  "title": "",
  "body": "  (3 points) Consider the following system of linear equations.     Suppose the system is written in matrix form as . Express as a linear combination of the columns of .     Expressing the system of equations in augmented matrix form, we have     and so the solution is . Rewriting as a vector equation, we obtain    "
},
{
  "id": "ex1-exams-4-6-2",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-6-2",
  "type": "Problem",
  "number": "2.1.19",
  "title": "",
  "body": "  (4 points) Let and . Find and so that           Computing and , we have    Notice that if we want , then we must have (the matrices must agree in the first row, first column), and (the matrices must agree in the second row, second column). Solving these equations, we find that and .   "
},
{
  "id": "ex1-exams-4-7-1",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-7-1",
  "type": "Problem",
  "number": "2.1.20",
  "title": "",
  "body": "  (3 points) Write a nonzero matrix of size which is in echelon form (REF) and such that the vector is a solution to and such that the vector causes to be consistent.       If must make consistent, try making a column of (why would this work?). Also, consider making the first column of be (this is reasonble since is in echelon form).    One possible matrix is    "
},
{
  "id": "ex1-exams-4-7-2",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-7-2",
  "type": "Problem",
  "number": "2.1.21",
  "title": "",
  "body": "  (2 points) Fill in the blank so that the systems with the two augmented matrices below have the same solution set. and     The missing entry is .      "
},
{
  "id": "ex1-exams-4-8-1",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-8-1",
  "type": "Problem",
  "number": "2.1.22",
  "title": "",
  "body": "  (7 points) Show your work for part (c) in the space below and put your hint in the boxes.   Let be the linear transformation defined by      What are the domain and codomain of ?           takes in vectors with three components and outputs vectors with two components. So the domain is and the codomain is .      Find the matrix such that for all .          Option 1: Notice that Therefore, the matrix is   Option 2: The matrix can also be found by applying to the standard basis vectors and using the results as the columns of . Therefore, the matrix is       Find a vector such that where .          Solving the system of equations given by , or equivalently , we get   which we can now express in parametric vector form as   One simple solution is obtained by setting , which gives       Is one-to-one?    We have proven that a linear transformation is one-to-one if and only if there is a pivot in every column of the standard matrix of the transformation.    No. The standard matrix of does not have a pivot in every column, so is not one-to-one. Another way to see this is from the answer from Part (c); there are multiple solutions to the system , which indicates that is not one-to-one.      Is onto?    We have proven that a linear transformation is onto if and only if there is a pivot in every row of the standard matrix of the transformation.    Yes. The standard matrix of has a pivot in every row, so is onto. Another way to see this is by solving the system for an arbitrary and showing that a solution always exists.    "
},
{
  "id": "ex1-exams-4-9-1",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-9-1",
  "type": "Problem",
  "number": "2.1.23",
  "title": "",
  "body": "  (6 points) Show your work for problems on this page and put your answers in the boxes.   Find all such that the following set of vectors is linearly dependent. For that , find a non-trivial linear combination of the vectors that adds to zero.               We want the matrix to be missing a pivot. (Why?) Once it is missing a pivot, we want to find a nontrivial solution to . (Why?)    Let . Row reducing, we find that   If we want the columns of to be linearly dependent, we need to be missing a pivot in a column. This occurs when , i.e., .  If , then we can row reduce further to find   and writing the general solution in parametric vector form, we get   We can choose any nonzero value of to get a specific linear combination of the vectors that add to zero. Choosing yields one solution of    "
},
{
  "id": "ex1-exams-4-10-1",
  "level": "2",
  "url": "ex1-exams-4.html#ex1-exams-4-10-1",
  "type": "Problem",
  "number": "2.1.24",
  "title": "",
  "body": "  (6 points) Show your work for part (a) in the space below and put your answers in the boxes.   Consider the linear system of equations where   and      Give the general solution of the system in parametric vector form.          Row reducing the augmented matrix gives   which yields the solution       Let be as defined above. Write down the solution set to the homogeneous system as the span of some number of vectors.        If is consistent with a solution of , then the solution set of is given by where is the solution set of the corresponding homogeneous system .    Since the solution set to is the solution set to must be     "
},
{
  "id": "ex2-exams-3",
  "level": "1",
  "url": "ex2-exams-3.html",
  "type": "Handout",
  "number": "",
  "title": "Exam 2, Spring 2026",
  "body": " Exam 2, Spring 2026     Instructions for each exam are as follows:    Show your work and justify your answers for all questions unless stated otherwise.     Orgainze your work in a reasonably neat and coherent way.     Simplify your answers unless explicitly stated otherwise.    Calculators, notes, cell phones, and books are not allowed.    Use dark and clear writing: your exam will be scanned into a digital system.    Exam pages are double sided. Be sure to complete both sides.    Leave a 1 inch border around the edges of exams.    The last page is for scratch work. Please use it if you need extra space.        True \/ False    (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If and are row equivalent, then .    Do row operations change the determinant?     False . Let and . Then and are row equivalent, but and .       True   \/   False :   If and are probability vectors in , then is also a probability vector in .    Recall that a probability vector in is a vector with nonnegative entries that sum to 1.     True . Since and are probability vectors, their entries are nonnegative and sum to 1. The linear combination will also have nonnegative entries and the sum of its entries will be , making it a probability vector.       True   \/   False :   If the matrix product is defined, then the product is also defined.    For a matrix product to be defined, the number of columns of the first matrix must equal the number of rows of the second matrix.     False . Consider and . Then is defined, but is not defined (The number of columns of does not equal the number of rows of ).       True   \/   False :   If , then must have a zero row or have two rows which are identical.     when is not invertible.     False . Consider . Then , but does not have a zero row and does not have two identical rows.       True   \/   False :   If is an matrix and is an factorization of , then .    Use the multiplicity of the determinant.     True . Since , we have . By the multiplicity of the determinant, this becomes . The matrix is lower triangular with ones on the diagonal, so . Therefore, .       True   \/   False :   If and are invertible matrices then is also invertible.    Play around with some examples.     False . Consider and . Then and are both invertible, but is not invertible.       True   \/   False :   If is an matrix and is a scalar such that , then there exists a nonzero vector such that     Relate everything to eigenvectors.     True . The condition means that is an eigenvalue of . By the definition of eigenvectors, there exists a nonzero vector such that . Therefore, .       True   \/   False :   If and are both matrices with pivots in each of their columns, then the product has a pivot in each of its columns    Use the Invertible Matrix Theorem     True . By the Invertible Matrix Theorem, if and have pivots in each of their columns, then both and are invertible ( are squre, so IMT applies). The product of two invertible matrices is also invertible, and therefore has a pivot in each of its columns.         (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A matrix with such that the system has no solution.    Use the Rank-Nullity Theorem     Impossible . By the Rank-Nullity Theorem, if , then . Since is , is invertible, and thus is both onto and one-to-one. Equivalently, system must have a solution, and such a solution must be unique.       Possible   \/   Impossible :   A matrix so that     Play around with some examples of matrices and their ranks.     Impossible . The maximum rank of a matrix is (the minimum of the number of rows and columns), so it cannot have rank .       Possible   \/   Impossible :   Two non-zero matrices A and B, neither of which is , with     Try some diagonal matrices.     Possible . For example, let and . Then , and neither nor is .       Possible   \/   Impossible :   A invertible matrix so that     Consider the effect of row operations on the determinant.     Possible . For example, let . Then and , so the condition is satisfied. In fact, any invertible matrix will work, since row replacement operations do not change the determinant.         (2 points) Let be an matrix such that for every , the system has a unique solution. Which of the following statements is FALSE?    The rows of form a basis for  dim .  The system has a unique solution for every  The columns of are linearly independent.     Notice that is square, so use the Invertible Matrix Theorem.    Option (b) is the only correct answer.  Option (a) is a true statement. Since is square and has a unique solution for every , is one-to-one (unique) and onto (always has a solution). Equivalently, is invertible. So has a pivot in every row, and thus the rows of are linearly independent. Any linearly independent vectors in form a basis for , so the rows of form a basis for .  Option (b) is a false statement. Since is invertible, the only solution to is , so the dimension of the solution space to is 0.  Option (c) is a true statement. Since is invertible, is also invertible, and thus the system has a unique solution for every .  Option (d) is a true statement. Since is invertible, the columns of are linearly independent.        (2 points) Which of the following subsets of are subspaces?           Every subspace can be written as the span of a collection of vectors, and vice versa. A set of vectors that is not a span will not be closed under addition and\/or scalar multiplication.    Options (b) and (d) are correct.  Option (a) is incorrect because .  Option (b) is correct because is the span of the vectors and .  Option (c) is incorrect because is not closed under addition. For example, and , but .  Option (d) is correct because , and the null space of a matrix is always a subspace.      (3 points) Suppose that and and . Find the value of the determinant below:     Use cofactor expansion across the 2nd column.    Using cofactor expansion across the 2nd column, we get:         (3 points) Compute the area of the parallelogram having vertices . Then, let be the transformation with standard matrix . Find the area of            Pick an arbitrary vertex of the parallelogram, say . Let us shift the whole parallogram such that this vertex is at the origin. The new vertices are then . The area of the parallelogram is then given by the absolute value of the determinant of the matrix formed by the two adjacent edge vectors from the origin: The transformation has standard matrix , so the area of the transformed parallelogram is:       (4 points) Consider the system , where Let and be as in Cramer's Rule; that is, Let be the matrix with column replaced with . Find , and the solution vector              Cramer's Rule states that for a system with invertible, the solution vector can be found using determinants:                 Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (5 points) Find an eigenvector of corresponding to the eigenvalue            An eigenvector corresponding to the eigenvalue satisfies . Solving this system gives:   and it is clear one nonzero vector in the null space of is .     (3 points) Find the value of such that the matrix has eigenvalues and     We want for the given eigenvalues.    For to have eigenvalues and , we must have: Solving these equations gives:          (6 points)  Use the following Markov chain diagram to answer the questions. (a) Find the stochastic matrix of the Markov chain. (b) Find the unique steady state probability vector of  (c) If , find the limit of the sequence of vectors as tend to infinity.                  By convention, the entry represents the probability of transitioning from state to state .     The unique steady state vector satisfies . Equivalently, . so one nonzero vector in is . But must be a probability vector, so we adjust to get   Finally, to find , we use the steady state vector and get         (4 points) Show your work in the space below and put your answer in the boxes. Let Find a basis for and state            Write as the span of some vectors.     consists of all vectors satisfying the linear equation In other words, for any vector , we get Therefore, a basis for is and .        (6 points) Show your work in the space below and put your answer in the boxes. Find the factorizations for the following matrix            We build the LU factorization step by step.        So the LU factorization of is      "
},
{
  "id": "ex2-exams-3-3-2",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-3-2",
  "type": "Problem",
  "number": "2.2.1",
  "title": "",
  "body": "  (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If and are row equivalent, then .    Do row operations change the determinant?     False . Let and . Then and are row equivalent, but and .       True   \/   False :   If and are probability vectors in , then is also a probability vector in .    Recall that a probability vector in is a vector with nonnegative entries that sum to 1.     True . Since and are probability vectors, their entries are nonnegative and sum to 1. The linear combination will also have nonnegative entries and the sum of its entries will be , making it a probability vector.       True   \/   False :   If the matrix product is defined, then the product is also defined.    For a matrix product to be defined, the number of columns of the first matrix must equal the number of rows of the second matrix.     False . Consider and . Then is defined, but is not defined (The number of columns of does not equal the number of rows of ).       True   \/   False :   If , then must have a zero row or have two rows which are identical.     when is not invertible.     False . Consider . Then , but does not have a zero row and does not have two identical rows.       True   \/   False :   If is an matrix and is an factorization of , then .    Use the multiplicity of the determinant.     True . Since , we have . By the multiplicity of the determinant, this becomes . The matrix is lower triangular with ones on the diagonal, so . Therefore, .       True   \/   False :   If and are invertible matrices then is also invertible.    Play around with some examples.     False . Consider and . Then and are both invertible, but is not invertible.       True   \/   False :   If is an matrix and is a scalar such that , then there exists a nonzero vector such that     Relate everything to eigenvectors.     True . The condition means that is an eigenvalue of . By the definition of eigenvectors, there exists a nonzero vector such that . Therefore, .       True   \/   False :   If and are both matrices with pivots in each of their columns, then the product has a pivot in each of its columns    Use the Invertible Matrix Theorem     True . By the Invertible Matrix Theorem, if and have pivots in each of their columns, then both and are invertible ( are squre, so IMT applies). The product of two invertible matrices is also invertible, and therefore has a pivot in each of its columns.    "
},
{
  "id": "ex2-exams-3-4-1",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-4-1",
  "type": "Problem",
  "number": "2.2.2",
  "title": "",
  "body": "  (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A matrix with such that the system has no solution.    Use the Rank-Nullity Theorem     Impossible . By the Rank-Nullity Theorem, if , then . Since is , is invertible, and thus is both onto and one-to-one. Equivalently, system must have a solution, and such a solution must be unique.       Possible   \/   Impossible :   A matrix so that     Play around with some examples of matrices and their ranks.     Impossible . The maximum rank of a matrix is (the minimum of the number of rows and columns), so it cannot have rank .       Possible   \/   Impossible :   Two non-zero matrices A and B, neither of which is , with     Try some diagonal matrices.     Possible . For example, let and . Then , and neither nor is .       Possible   \/   Impossible :   A invertible matrix so that     Consider the effect of row operations on the determinant.     Possible . For example, let . Then and , so the condition is satisfied. In fact, any invertible matrix will work, since row replacement operations do not change the determinant.    "
},
{
  "id": "ex2-exams-3-4-3",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-4-3",
  "type": "Problem",
  "number": "2.2.3",
  "title": "",
  "body": "  (2 points) Let be an matrix such that for every , the system has a unique solution. Which of the following statements is FALSE?    The rows of form a basis for  dim .  The system has a unique solution for every  The columns of are linearly independent.     Notice that is square, so use the Invertible Matrix Theorem.    Option (b) is the only correct answer.  Option (a) is a true statement. Since is square and has a unique solution for every , is one-to-one (unique) and onto (always has a solution). Equivalently, is invertible. So has a pivot in every row, and thus the rows of are linearly independent. Any linearly independent vectors in form a basis for , so the rows of form a basis for .  Option (b) is a false statement. Since is invertible, the only solution to is , so the dimension of the solution space to is 0.  Option (c) is a true statement. Since is invertible, is also invertible, and thus the system has a unique solution for every .  Option (d) is a true statement. Since is invertible, the columns of are linearly independent.   "
},
{
  "id": "ex2-exams-3-5-1",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-5-1",
  "type": "Problem",
  "number": "2.2.4",
  "title": "",
  "body": "  (2 points) Which of the following subsets of are subspaces?           Every subspace can be written as the span of a collection of vectors, and vice versa. A set of vectors that is not a span will not be closed under addition and\/or scalar multiplication.    Options (b) and (d) are correct.  Option (a) is incorrect because .  Option (b) is correct because is the span of the vectors and .  Option (c) is incorrect because is not closed under addition. For example, and , but .  Option (d) is correct because , and the null space of a matrix is always a subspace.   "
},
{
  "id": "ex2-exams-3-5-2",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-5-2",
  "type": "Problem",
  "number": "2.2.5",
  "title": "",
  "body": "  (3 points) Suppose that and and . Find the value of the determinant below:     Use cofactor expansion across the 2nd column.    Using cofactor expansion across the 2nd column, we get:    "
},
{
  "id": "ex2-exams-3-6-1",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-6-1",
  "type": "Problem",
  "number": "2.2.6",
  "title": "",
  "body": "  (3 points) Compute the area of the parallelogram having vertices . Then, let be the transformation with standard matrix . Find the area of            Pick an arbitrary vertex of the parallelogram, say . Let us shift the whole parallogram such that this vertex is at the origin. The new vertices are then . The area of the parallelogram is then given by the absolute value of the determinant of the matrix formed by the two adjacent edge vectors from the origin: The transformation has standard matrix , so the area of the transformed parallelogram is:    "
},
{
  "id": "ex2-exams-3-6-2",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-6-2",
  "type": "Problem",
  "number": "2.2.7",
  "title": "",
  "body": "  (4 points) Consider the system , where Let and be as in Cramer's Rule; that is, Let be the matrix with column replaced with . Find , and the solution vector              Cramer's Rule states that for a system with invertible, the solution vector can be found using determinants:            "
},
{
  "id": "ex2-exams-3-7-1",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-7-1",
  "type": "Problem",
  "number": "2.2.8",
  "title": "",
  "body": "  Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (5 points) Find an eigenvector of corresponding to the eigenvalue            An eigenvector corresponding to the eigenvalue satisfies . Solving this system gives:   and it is clear one nonzero vector in the null space of is .   "
},
{
  "id": "ex2-exams-3-7-2",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-7-2",
  "type": "Problem",
  "number": "2.2.9",
  "title": "",
  "body": " (3 points) Find the value of such that the matrix has eigenvalues and     We want for the given eigenvalues.    For to have eigenvalues and , we must have: Solving these equations gives:     "
},
{
  "id": "ex2-exams-3-8-1",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-8-1",
  "type": "Problem",
  "number": "2.2.10",
  "title": "",
  "body": "  (6 points)  Use the following Markov chain diagram to answer the questions. (a) Find the stochastic matrix of the Markov chain. (b) Find the unique steady state probability vector of  (c) If , find the limit of the sequence of vectors as tend to infinity.                  By convention, the entry represents the probability of transitioning from state to state .     The unique steady state vector satisfies . Equivalently, . so one nonzero vector in is . But must be a probability vector, so we adjust to get   Finally, to find , we use the steady state vector and get    "
},
{
  "id": "ex2-exams-3-9-1",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-9-1",
  "type": "Problem",
  "number": "2.2.12",
  "title": "",
  "body": "  (4 points) Show your work in the space below and put your answer in the boxes. Let Find a basis for and state            Write as the span of some vectors.     consists of all vectors satisfying the linear equation In other words, for any vector , we get Therefore, a basis for is and .   "
},
{
  "id": "ex2-exams-3-10-1",
  "level": "2",
  "url": "ex2-exams-3.html#ex2-exams-3-10-1",
  "type": "Problem",
  "number": "2.2.13",
  "title": "",
  "body": "  (6 points) Show your work in the space below and put your answer in the boxes. Find the factorizations for the following matrix            We build the LU factorization step by step.        So the LU factorization of is    "
},
{
  "id": "ex2-exams-4",
  "level": "1",
  "url": "ex2-exams-4.html",
  "type": "Handout",
  "number": "",
  "title": "Exam 2, Fall 2025",
  "body": " Exam 2, Fall 2025     Instructions for each exam are as follows:    Show your work and justify your answers for all questions unless stated otherwise.     Orgainze your work in a reasonably neat and coherent way.     Simplify your answers unless explicitly stated otherwise.    Calculators, notes, cell phones, and books are not allowed.    Use dark and clear writing: your exam will be scanned into a digital system.    Exam pages are double sided. Be sure to complete both sides.    Leave a 1 inch border around the edges of exams.    The last page is for scratch work. Please use it if you need extra space.        True \/ False    (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If is a stochastic matrix with all positive entries and are probability vectors in , then the sequences converge to the same limit as tends to infinity.    True.    Solution text       True   \/   False :   The -factorization of a matrix is unique.    False.    Solution text       True   \/   False :   If spans , then the subspace is 2-dimensional.    True    Solution text       True   \/   False :   If are matrices and , and are partitioned matrices, then is defined and is a matrix.    False    Solution text       True   \/   False :   If is a square matrix that is row equivalent to an upper triangular matrix, then is invertible.    False    Solution text       True   \/   False :   For any matrix , we have .    True    Solution text       True   \/   False :   The determinant of a square matrix is the product of the diagonal entries of .    False.    Solution text       True   \/   False :   If and are probability vectors, then is also a probability vector.    False    Solution text         (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A square matrix with a column of zeros and .    impossible.    Solution Text       Possible   \/   Impossible :   A non-invertible matrix with -factorization such that is invertible.    impossible.    Solution Text       Possible   \/   Impossible :   Matrices such that is invertible and is not a square matrix.    Possible.    Solution Text       Possible   \/   Impossible :   A matrix so that .    Impossible.    Solution Text.         (3 points) Let be an matrix. Which of the following is invertible?    The columns of span  The set of solutions of is a subspace of   is invertible  is row equivalent to a diagonal matrix  has zero as an eigenvalue     Options (a) and (d) are correct    Option (a) is correct.  Option (b) is incorrect.  Option (c) is incorrect.  Option (d) is correct.  Option (e) is incorrect.  Option (f) is incorrect.        (3 points) Suppose is an matrix which has eigenvalues and with associated eigenvectors and respectively. Fill in the circle next to the statements which must be .    If , then .  If , then .  If , then are linearly independent.  If , then is an eigenvector of .  The value is an eigenvalue of .  The vector is an eigenvectors of .     Options (a), (c) and (f) are correct    Option (a) is correct.  Option (b) is incorrect.  Option (c) is correct.  Option (d) is incorrect.  Option (e) is incorrect.  Option (f) is correct.      (3 points) Find a basis for the subspace consisting of all vectors which satisfy the conditions that             Solution text        (4 points) Suppose Find the determinant of the matrices below.         , ,     Solution text      (3 points) Let be invertible matrices and suppose that . Solve the equation and write the matrix in terms of and their inverses.            Solution text        You do not need to justify your reasoning for questions on this page.    (3 points) Let . Find the characteristic polynomial of A.          Solution text      (3 points) Let be the transformation with the standard matrix . Let be the parallelogram with vertices Find the area of and ..          Solution text        (6 points)  Use the following Markov chain diagram to answer the questions. (a) Find the stochastic matrix of the Markov chain. (b) Find the unique steady state probability vector of  (c) If , find the limit of the sequence of vectors as tend to infinity.   Two-state Markov chain                   Solution text        (4 points) Show your work in the space below and put your answer in the boxes. Compute the factorization of        \\end{bmatrix} \\end{bmatrix}    Solution text        (6 points) Show your work in the space below and put your answer in the boxes. Suppose has eigenvalues and . Let , and be eigenvectors corresponding to and respectively: Write the answers to each of the following parts in the designated boxes given below   What is the dimension of the null space of ?  What is ?  If , what is .  Note that is a basis for . What is                   Solution text     "
},
{
  "id": "ex2-exams-4-3-2",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-3-2",
  "type": "Problem",
  "number": "2.2.14",
  "title": "",
  "body": "  (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If is a stochastic matrix with all positive entries and are probability vectors in , then the sequences converge to the same limit as tends to infinity.    True.    Solution text       True   \/   False :   The -factorization of a matrix is unique.    False.    Solution text       True   \/   False :   If spans , then the subspace is 2-dimensional.    True    Solution text       True   \/   False :   If are matrices and , and are partitioned matrices, then is defined and is a matrix.    False    Solution text       True   \/   False :   If is a square matrix that is row equivalent to an upper triangular matrix, then is invertible.    False    Solution text       True   \/   False :   For any matrix , we have .    True    Solution text       True   \/   False :   The determinant of a square matrix is the product of the diagonal entries of .    False.    Solution text       True   \/   False :   If and are probability vectors, then is also a probability vector.    False    Solution text    "
},
{
  "id": "ex2-exams-4-4-1",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-4-1",
  "type": "Problem",
  "number": "2.2.15",
  "title": "",
  "body": "  (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A square matrix with a column of zeros and .    impossible.    Solution Text       Possible   \/   Impossible :   A non-invertible matrix with -factorization such that is invertible.    impossible.    Solution Text       Possible   \/   Impossible :   Matrices such that is invertible and is not a square matrix.    Possible.    Solution Text       Possible   \/   Impossible :   A matrix so that .    Impossible.    Solution Text.    "
},
{
  "id": "ex2-exams-4-4-3",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-4-3",
  "type": "Problem",
  "number": "2.2.16",
  "title": "",
  "body": "  (3 points) Let be an matrix. Which of the following is invertible?    The columns of span  The set of solutions of is a subspace of   is invertible  is row equivalent to a diagonal matrix  has zero as an eigenvalue     Options (a) and (d) are correct    Option (a) is correct.  Option (b) is incorrect.  Option (c) is incorrect.  Option (d) is correct.  Option (e) is incorrect.  Option (f) is incorrect.   "
},
{
  "id": "ex2-exams-4-5-1",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-5-1",
  "type": "Problem",
  "number": "2.2.17",
  "title": "",
  "body": "  (3 points) Suppose is an matrix which has eigenvalues and with associated eigenvectors and respectively. Fill in the circle next to the statements which must be .    If , then .  If , then .  If , then are linearly independent.  If , then is an eigenvector of .  The value is an eigenvalue of .  The vector is an eigenvectors of .     Options (a), (c) and (f) are correct    Option (a) is correct.  Option (b) is incorrect.  Option (c) is correct.  Option (d) is incorrect.  Option (e) is incorrect.  Option (f) is correct.   "
},
{
  "id": "ex2-exams-4-5-2",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-5-2",
  "type": "Problem",
  "number": "2.2.18",
  "title": "",
  "body": "  (3 points) Find a basis for the subspace consisting of all vectors which satisfy the conditions that             Solution text   "
},
{
  "id": "ex2-exams-4-6-1",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-6-1",
  "type": "Problem",
  "number": "2.2.19",
  "title": "",
  "body": "  (4 points) Suppose Find the determinant of the matrices below.         , ,     Solution text   "
},
{
  "id": "ex2-exams-4-6-2",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-6-2",
  "type": "Problem",
  "number": "2.2.20",
  "title": "",
  "body": "  (3 points) Let be invertible matrices and suppose that . Solve the equation and write the matrix in terms of and their inverses.            Solution text   "
},
{
  "id": "ex2-exams-4-7-1",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-7-1",
  "type": "Problem",
  "number": "2.2.21",
  "title": "",
  "body": "  You do not need to justify your reasoning for questions on this page.    (3 points) Let . Find the characteristic polynomial of A.          Solution text   "
},
{
  "id": "ex2-exams-4-7-2",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-7-2",
  "type": "Problem",
  "number": "2.2.22",
  "title": "",
  "body": "  (3 points) Let be the transformation with the standard matrix . Let be the parallelogram with vertices Find the area of and ..          Solution text   "
},
{
  "id": "ex2-exams-4-8-1",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-8-1",
  "type": "Problem",
  "number": "2.2.23",
  "title": "",
  "body": "  (6 points)  Use the following Markov chain diagram to answer the questions. (a) Find the stochastic matrix of the Markov chain. (b) Find the unique steady state probability vector of  (c) If , find the limit of the sequence of vectors as tend to infinity.   Two-state Markov chain                   Solution text   "
},
{
  "id": "ex2-exams-4-9-1",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-9-1",
  "type": "Problem",
  "number": "2.2.25",
  "title": "",
  "body": "  (4 points) Show your work in the space below and put your answer in the boxes. Compute the factorization of        \\end{bmatrix} \\end{bmatrix}    Solution text   "
},
{
  "id": "ex2-exams-4-10-1",
  "level": "2",
  "url": "ex2-exams-4.html#ex2-exams-4-10-1",
  "type": "Problem",
  "number": "2.2.26",
  "title": "",
  "body": "  (6 points) Show your work in the space below and put your answer in the boxes. Suppose has eigenvalues and . Let , and be eigenvectors corresponding to and respectively: Write the answers to each of the following parts in the designated boxes given below   What is the dimension of the null space of ?  What is ?  If , what is .  Note that is a basis for . What is                   Solution text   "
},
{
  "id": "ex3-exams-3",
  "level": "1",
  "url": "ex3-exams-3.html",
  "type": "Handout",
  "number": "",
  "title": "Exam 3, Spring 2026",
  "body": " Exam 3, Spring 2026     Instructions for each exam are as follows:    Show your work and justify your answers for all questions unless stated otherwise.     Orgainze your work in a reasonably neat and coherent way.     Simplify your answers unless explicitly stated otherwise.    Calculators, notes, cell phones, and books are not allowed.    Use dark and clear writing: your exam will be scanned into a digital system.    Exam pages are double sided. Be sure to complete both sides.    Leave a 1 inch border around the edges of exams.    The last page is for scratch work. Please use it if you need extra space.        True \/ False    (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If is an diagonalizable matrix, then has real eigenvalues, counting multiplicities.    True.    Solution text       True   \/   False :   If is a subspace of and with , then     False.    Solution text    `   True   \/   False :   If and are orthogonal matrices, then is also an orthogonal matrix.    False    Solution text       True   \/   False :   If is an orthonormal basis for and , then .    False    Solution text       True   \/   False :   Every basis for a subspace can be turned into an orthonormal basis by using the Gram-Schmidt process.    True    Solution text       True   \/   False :   If is a least squares solution to , then .    True    Solution text       (2 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A matrix with all real eignenvalues, but is not diagonalizable.    possible.    Solution Text       Possible   \/   Impossible :   An orthogonal set of vectors which is linearly dependent.    possible.    Solution Text           (4 points) Let be a matrix whose columns form an orthognal set . Assume that has at least one pivot. Which of the following statements are TRUE?      All of the columns of are non zero vectors.  .  .     Option (a) is correct    Option (a) is correct.  Option (b) is incorrect.  Option (c) is incorrect.  Option (d) is incorrect.      (4 points) Find the values of and so that is an eigenvector of corresponding to an eigenvalue of , where Also find , the other eigenvalue of , and an associated eigenvector .                   solution to a  solution to b  solution to   solution to         (6 points) Fill in the blanks.    Suppose and are vectors in with , and . Determine the length of .          Solution text.      Compute the length of the vector .            Solution text.      Find a non-zero vector so that           Solution text.        (2 points) Suppose that is a matrix such that . Determine the dimension of the column space of .          Solution text      (4 points) Let be a subspace of spanned by the orthogonal basis . Find the projection . Then determine the coordinate vector of relative to the basis .             Solution text        (3 points) Determine the least squares solution to the system , where           Solution text      (3 points) Give a matrix such that is spanned by           Solution text        Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (5 points) Find an invertible matrix and a diagonal matrix such that , where            Solution text     (4 points) Let . Find an basis for .         Solution text        Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (7 points) In this problem, you will use the least-squares method to find the values and which best fit the curve to the data points     What is the augmented matrix for this least squares problem?          Solution text      What is the augmented matrix for the normal equations for this least squares problem?          Solution text      Find a least-squares solution to the linear system from (a) to determine the parameters of and of the best fitting curve.           Solution text     "
},
{
  "id": "ex3-exams-3-3-2",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-3-2",
  "type": "Problem",
  "number": "2.3.1",
  "title": "",
  "body": "  (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If is an diagonalizable matrix, then has real eigenvalues, counting multiplicities.    True.    Solution text       True   \/   False :   If is a subspace of and with , then     False.    Solution text    `   True   \/   False :   If and are orthogonal matrices, then is also an orthogonal matrix.    False    Solution text       True   \/   False :   If is an orthonormal basis for and , then .    False    Solution text       True   \/   False :   Every basis for a subspace can be turned into an orthonormal basis by using the Gram-Schmidt process.    True    Solution text       True   \/   False :   If is a least squares solution to , then .    True    Solution text    "
},
{
  "id": "ex3-exams-3-3-3",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-3-3",
  "type": "Problem",
  "number": "2.3.2",
  "title": "",
  "body": "  (2 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A matrix with all real eignenvalues, but is not diagonalizable.    possible.    Solution Text       Possible   \/   Impossible :   An orthogonal set of vectors which is linearly dependent.    possible.    Solution Text    "
},
{
  "id": "ex3-exams-3-4-2",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-4-2",
  "type": "Problem",
  "number": "2.3.3",
  "title": "",
  "body": "  (4 points) Let be a matrix whose columns form an orthognal set . Assume that has at least one pivot. Which of the following statements are TRUE?      All of the columns of are non zero vectors.  .  .     Option (a) is correct    Option (a) is correct.  Option (b) is incorrect.  Option (c) is incorrect.  Option (d) is incorrect.   "
},
{
  "id": "ex3-exams-3-4-3",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-4-3",
  "type": "Problem",
  "number": "2.3.4",
  "title": "",
  "body": "  (4 points) Find the values of and so that is an eigenvector of corresponding to an eigenvalue of , where Also find , the other eigenvalue of , and an associated eigenvector .                   solution to a  solution to b  solution to   solution to    "
},
{
  "id": "ex3-exams-3-5-1",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-5-1",
  "type": "Problem",
  "number": "2.3.5",
  "title": "",
  "body": "  (6 points) Fill in the blanks.    Suppose and are vectors in with , and . Determine the length of .          Solution text.   "
},
{
  "id": "ex3-exams-3-5-2",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-5-2",
  "type": "Problem",
  "number": "2.3.6",
  "title": "",
  "body": "  Compute the length of the vector .            Solution text.   "
},
{
  "id": "ex3-exams-3-5-3",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-5-3",
  "type": "Problem",
  "number": "2.3.7",
  "title": "",
  "body": "  Find a non-zero vector so that           Solution text.   "
},
{
  "id": "ex3-exams-3-6-1",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-6-1",
  "type": "Problem",
  "number": "2.3.8",
  "title": "",
  "body": "  (2 points) Suppose that is a matrix such that . Determine the dimension of the column space of .          Solution text   "
},
{
  "id": "ex3-exams-3-6-2",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-6-2",
  "type": "Problem",
  "number": "2.3.9",
  "title": "",
  "body": "  (4 points) Let be a subspace of spanned by the orthogonal basis . Find the projection . Then determine the coordinate vector of relative to the basis .             Solution text   "
},
{
  "id": "ex3-exams-3-7-1",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-7-1",
  "type": "Problem",
  "number": "2.3.10",
  "title": "",
  "body": "  (3 points) Determine the least squares solution to the system , where           Solution text   "
},
{
  "id": "ex3-exams-3-7-2",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-7-2",
  "type": "Problem",
  "number": "2.3.11",
  "title": "",
  "body": "  (3 points) Give a matrix such that is spanned by           Solution text   "
},
{
  "id": "ex3-exams-3-8-1",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-8-1",
  "type": "Problem",
  "number": "2.3.12",
  "title": "",
  "body": "  Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (5 points) Find an invertible matrix and a diagonal matrix such that , where            Solution text   "
},
{
  "id": "ex3-exams-3-8-2",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-8-2",
  "type": "Problem",
  "number": "2.3.13",
  "title": "",
  "body": " (4 points) Let . Find an basis for .         Solution text   "
},
{
  "id": "ex3-exams-3-9-1",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-9-1",
  "type": "Problem",
  "number": "2.3.14",
  "title": "",
  "body": "  Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (7 points) In this problem, you will use the least-squares method to find the values and which best fit the curve to the data points     What is the augmented matrix for this least squares problem?          Solution text   "
},
{
  "id": "ex3-exams-3-9-2",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-9-2",
  "type": "Problem",
  "number": "2.3.15",
  "title": "",
  "body": "  What is the augmented matrix for the normal equations for this least squares problem?          Solution text   "
},
{
  "id": "ex3-exams-3-9-3",
  "level": "2",
  "url": "ex3-exams-3.html#ex3-exams-3-9-3",
  "type": "Problem",
  "number": "2.3.16",
  "title": "",
  "body": "  Find a least-squares solution to the linear system from (a) to determine the parameters of and of the best fitting curve.           Solution text   "
},
{
  "id": "ex3-exams-4",
  "level": "1",
  "url": "ex3-exams-4.html",
  "type": "Handout",
  "number": "",
  "title": "Exam 3, Fall 2025",
  "body": " Exam 3, Fall 2025     Instructions for each exam are as follows:    Show your work and justify your answers for all questions unless stated otherwise.     Orgainze your work in a reasonably neat and coherent way.     Simplify your answers unless explicitly stated otherwise.    Calculators, notes, cell phones, and books are not allowed.    Use dark and clear writing: your exam will be scanned into a digital system.    Exam pages are double sided. Be sure to complete both sides.    Leave a 1 inch border around the edges of exams.    The last page is for scratch work. Please use it if you need extra space.        True \/ False    (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If and are orthogonal matrices, then is also an othogonal matrix.    True.    Solution text       True   \/   False :   Any set of vectors in can be transformed into an orthogonal basis for using the Gram-Schmidt process.    False.    Solution text    `   True   \/   False :   If is an -dimensional subspace of , then .    True    Solution text       True   \/   False :   If is not invertible, then there is no least-squares solution to .    False    Solution text       True   \/   False :   If is a basis of the subspace of , and , then .    True    Solution text       True   \/   False :   If is the matrix of the orthogonal projection onto a subspace of , then .    True    Solution text       True   \/   False :   If is the vecotr in which minimizes , then is a least-squares solution of .    True    Solution text       True   \/   False :   If is a 1-dimensional subspace of and , then .    False    Solution text       (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A orthogonal matrix so that .    impossible.    Solution Text       Possible   \/   Impossible :   A square matrix that is invertible but not diagonalizable.    possible.    Solution Text       Possible   \/   Impossible :   A subspace and a vector so that if , then , and .    possible.    Solution Text       Possible   \/   Impossible :   A matrix with real entries that haas no real eigenvalues.    impossible.    Solution Text       (2 points) Which of the following is true for every matrix with ?             Option (c) is correct    Solution text          (6 points) Fill in the blanks.    Suppose and are orthogonal vectors in and that is a unit vector. If , determine the length of .            Solution text      Compute the length of the vector .               Solution text      Let . The vector is an eigenvector of . Find the associated eigenvalue for the eigenvector of .               Solution text        (3 points) Consider the equation where is a -decomposition of with Compute the least squares solution to           Solution text.      (3 points) Let . Find a basis for , the orthogonal complement of .          Solution text.        (5 points) Let and   Find the orthogonal projection of to .          Solution text      Find the orthogonal projection of of to .          Solution text      Find the distance from to .           Solution text        (5 points) Show your work for part (a) on this page and put your answers in the boxes.  Suppose that (a) Find an orthogonal basis for the subspace           Solution text      (b) Find the orthonormal basis for the subspace            Solution text        Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (4 points) Find a matrix such that is an eigenvector of with eigenvalue , and is an eigenvector of with eigenvalue .           Solution text      (3 points) Suppose is a diagonalizable matrix with where Find and .            Solution text        Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (7 points) In this problem, you will use the least-squares method to find the values and which best fit the curve to the data points using the parameters and .    What is the augmented matrix for this least squares problem?          Solution text      What is the augmented matrix for the normal equations for this least squares problem?          Solution text      Find a least-squares solution to the linear system from (a) to determine the parameters of and of the best fitting curve.           Solution text     "
},
{
  "id": "ex3-exams-4-3-2",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-3-2",
  "type": "Problem",
  "number": "2.3.17",
  "title": "",
  "body": "  (8 points) Suppose is an matrix and unless otherwise stated. Select true if the statement is true for all choices of and . Otherwise, select false .      True   \/   False :   If and are orthogonal matrices, then is also an othogonal matrix.    True.    Solution text       True   \/   False :   Any set of vectors in can be transformed into an orthogonal basis for using the Gram-Schmidt process.    False.    Solution text    `   True   \/   False :   If is an -dimensional subspace of , then .    True    Solution text       True   \/   False :   If is not invertible, then there is no least-squares solution to .    False    Solution text       True   \/   False :   If is a basis of the subspace of , and , then .    True    Solution text       True   \/   False :   If is the matrix of the orthogonal projection onto a subspace of , then .    True    Solution text       True   \/   False :   If is the vecotr in which minimizes , then is a least-squares solution of .    True    Solution text       True   \/   False :   If is a 1-dimensional subspace of and , then .    False    Solution text    "
},
{
  "id": "ex3-exams-4-3-3",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-3-3",
  "type": "Problem",
  "number": "2.3.18",
  "title": "",
  "body": "  (4 points) Indicate whether the following situations are possible or impossible.      Possible   \/   Impossible :   A orthogonal matrix so that .    impossible.    Solution Text       Possible   \/   Impossible :   A square matrix that is invertible but not diagonalizable.    possible.    Solution Text       Possible   \/   Impossible :   A subspace and a vector so that if , then , and .    possible.    Solution Text       Possible   \/   Impossible :   A matrix with real entries that haas no real eigenvalues.    impossible.    Solution Text    "
},
{
  "id": "ex3-exams-4-3-4",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-3-4",
  "type": "Problem",
  "number": "2.3.19",
  "title": "",
  "body": "  (2 points) Which of the following is true for every matrix with ?             Option (c) is correct    Solution text   "
},
{
  "id": "ex3-exams-4-4-2",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-4-2",
  "type": "Problem",
  "number": "2.3.20",
  "title": "",
  "body": "  (6 points) Fill in the blanks.    Suppose and are orthogonal vectors in and that is a unit vector. If , determine the length of .            Solution text   "
},
{
  "id": "ex3-exams-4-4-3",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-4-3",
  "type": "Problem",
  "number": "2.3.21",
  "title": "",
  "body": "  Compute the length of the vector .               Solution text   "
},
{
  "id": "ex3-exams-4-4-4",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-4-4",
  "type": "Problem",
  "number": "2.3.22",
  "title": "",
  "body": "  Let . The vector is an eigenvector of . Find the associated eigenvalue for the eigenvector of .               Solution text   "
},
{
  "id": "ex3-exams-4-5-1",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-5-1",
  "type": "Problem",
  "number": "2.3.23",
  "title": "",
  "body": "  (3 points) Consider the equation where is a -decomposition of with Compute the least squares solution to           Solution text.   "
},
{
  "id": "ex3-exams-4-5-2",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-5-2",
  "type": "Problem",
  "number": "2.3.24",
  "title": "",
  "body": "  (3 points) Let . Find a basis for , the orthogonal complement of .          Solution text.   "
},
{
  "id": "ex3-exams-4-6-1",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-6-1",
  "type": "Problem",
  "number": "2.3.25",
  "title": "",
  "body": "  (5 points) Let and   Find the orthogonal projection of to .          Solution text   "
},
{
  "id": "ex3-exams-4-6-2",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-6-2",
  "type": "Problem",
  "number": "2.3.26",
  "title": "",
  "body": "  Find the orthogonal projection of of to .          Solution text   "
},
{
  "id": "ex3-exams-4-6-3",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-6-3",
  "type": "Problem",
  "number": "2.3.27",
  "title": "",
  "body": "  Find the distance from to .           Solution text   "
},
{
  "id": "ex3-exams-4-7-1",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-7-1",
  "type": "Problem",
  "number": "2.3.28",
  "title": "",
  "body": "  (5 points) Show your work for part (a) on this page and put your answers in the boxes.  Suppose that (a) Find an orthogonal basis for the subspace           Solution text   "
},
{
  "id": "ex3-exams-4-7-2",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-7-2",
  "type": "Problem",
  "number": "2.3.29",
  "title": "",
  "body": "  (b) Find the orthonormal basis for the subspace            Solution text   "
},
{
  "id": "ex3-exams-4-8-1",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-8-1",
  "type": "Problem",
  "number": "2.3.30",
  "title": "",
  "body": "  Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (4 points) Find a matrix such that is an eigenvector of with eigenvalue , and is an eigenvector of with eigenvalue .           Solution text   "
},
{
  "id": "ex3-exams-4-8-2",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-8-2",
  "type": "Problem",
  "number": "2.3.31",
  "title": "",
  "body": "  (3 points) Suppose is a diagonalizable matrix with where Find and .            Solution text   "
},
{
  "id": "ex3-exams-4-9-1",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-9-1",
  "type": "Problem",
  "number": "2.3.32",
  "title": "",
  "body": "  Show your work problem. Part of the grade is based on the justification\/ work shown. Can have parts. E.g.    (7 points) In this problem, you will use the least-squares method to find the values and which best fit the curve to the data points using the parameters and .    What is the augmented matrix for this least squares problem?          Solution text   "
},
{
  "id": "ex3-exams-4-9-2",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-9-2",
  "type": "Problem",
  "number": "2.3.33",
  "title": "",
  "body": "  What is the augmented matrix for the normal equations for this least squares problem?          Solution text   "
},
{
  "id": "ex3-exams-4-9-3",
  "level": "2",
  "url": "ex3-exams-4.html#ex3-exams-4-9-3",
  "type": "Problem",
  "number": "2.3.34",
  "title": "",
  "body": "  Find a least-squares solution to the linear system from (a) to determine the parameters of and of the best fitting curve.           Solution text   "
},
{
  "id": "chapter-1-ws-2",
  "level": "1",
  "url": "chapter-1-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.1, Systems of Linear Equations",
  "body": " Worksheet 1.1, Systems of Linear Equations    (1)   Indicate whether the statements are true or false.   If a linear system has more equations than unknowns, then the system cannot have a unique solution.  If a linear system has more unknowns than equations, then the system cannot have a unique solution.   Before moving on - what strategies does your TA(s) recommend that students can use to approach true\/false questions?    (2)   For what values of and , if any, does the system have each behavior below?   an infinite number of solutions  no solutions  exactly one solution      For the case where there are an infinite number of solutions, sketch the set of solutions. The sketch must have labeled axes, and the solution set should be drawn as a line without arrows.    (3)   From your TA’s perspective, what strategies do they recommend to ensure success in a college‑level linear algebra course? What strategies worked for them?  This worksheet is intentionally shorter to allow time for course and studio organization.    "
},
{
  "id": "chapter-1-ws-3",
  "level": "1",
  "url": "chapter-1-ws-3.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.2, Row Reduction and Echelon Forms",
  "body": " Worksheet 1.2, Row Reduction and Echelon Forms    (1)   Written Explanation Exercise Answer each of the following in one or two sentences.   What are some differences between echelon form and row‑reduced echelon form (RREF)? Give at least three.  How can row reduction be used to determine whether an augmented matrix corresponds to a consistent system?     (2)   Which matrices are in RREF? Which are in echelon form?       (3)   List all matrices in RREF. Use for arbitrary entries.      (4)   Indicate whether the following statements are true or false.   A linear system whose coefficient matrix has three pivot columns must be consistent.  The echelon form of a coefficient matrix is unique.     (5)   Construct the quadratic polynomial passing through , , and . That is, solve     (The coefficient matrix is an instance of the Vandermonde matrix. )    "
},
{
  "id": "chapter-1-ws-4",
  "level": "1",
  "url": "chapter-1-ws-4.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.3, Vector Equations",
  "body": " Worksheet 1.3, Vector Equations    (1)   Written Explanation Exercise   What does the span of a set of vectors represent?  How can we determine whether a vector is in the span of a set of vectors?     (2)   Suppose .    Sketch the span of the columns of the matrix. Label your axes. Use arrows for coordinate axes and vectors (because they are quantities with direction), but do not sketch the span of a set of vectors with arrows.    On the same graph, sketch the vectors and .    Using your graph, determine which of the following systems is consistent:          "
},
{
  "id": "chapter-1-ws-5",
  "level": "1",
  "url": "chapter-1-ws-5.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.4, The Matrix Equation",
  "body": " Worksheet 1.4, The Matrix Equation    (1)   is equal to which of the expressions below?         (2)   For what values of is in the plane spanned by and ?       (3)   Indicate whether the statements are true or false.   If the equation is inconsistent, then is not in the set spanned by the columns of .  If the augmented matrix has a pivot position in every row, then the equation must be consistent.  There are exactly three vectors in .     "
},
{
  "id": "chapter-1-ws-6",
  "level": "1",
  "url": "chapter-1-ws-6.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.5, Solution Sets of Linear Systems",
  "body": " Worksheet 1.5, Solution Sets of Linear Systems    (1)   Written Explanation Exercise    When a homogeneous system has a nontrivial solution, what properties does that system have? List at least two.      (2)   Indicate whether the statements are true or false.    A non‑trivial solution to has all non‑zero entries.    If and , then .    Any matrix with two pivotal positions has a non‑trivial solution to .        (3)   Example Construction     Give an example of a non‑zero matrix such that is a solution of .    Give an example of a non‑trivial solution to , where .      (4)   Express the solution to in parametric vector form, where   .    "
},
{
  "id": "chapter-1-ws-7",
  "level": "1",
  "url": "chapter-1-ws-7.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.7, Linear Independence",
  "body": " Worksheet 1.7, Linear Independence    (1)   Written Explanation Exercise   How are span and linear dependence related to each other?   Suppose is a linear map.   If are dependent, why are dependent?  If are independent, need be independent?       (2)   In the problems below, are three linearly independent vectors in . Which of the collections of vectors below are linearly independent?         (3)   For what values of are the columns of linearly dependent?         (4)   A matrix has all non‑zero columns, and . Identify a non‑trivial solution to .    (5)   Short answer questions.   The columns of a matrix are linearly independent. How many pivots does the matrix have?  If the columns of a matrix span , how many pivots does the matrix have?     "
},
{
  "id": "chapter-1-ws-8",
  "level": "1",
  "url": "chapter-1-ws-8.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.8, An Introduction to Linear Transforms",
  "body": " Worksheet 1.8, An Introduction to Linear Transforms    (1)   Written Explanation Exercise   Suppose for all where is a matrix and is onto.    What can we say about pivotal rows of ?    What can we say about the existence of solutions to ?      (2)   Let be a matrix. What must and be if we define the linear transformation by ?    (3)   Let be a linear transformation such that     Construct a matrix so that for all vectors .      (4)   Let be a linear transformation such that     Identify a non‑trivial solution to .    (5)   Let be the linear transformation with matrix below. Match each choice of on the left with the geometric description of on the right.   Match the matrices on the left to their descriptions on the right!      rotation by     A shear     projection onto the -axis     dilation by       "
},
{
  "id": "chapter-1-ws-8-3-2-2",
  "level": "2",
  "url": "chapter-1-ws-8.html#chapter-1-ws-8-3-2-2",
  "type": "Table",
  "number": "3.1.1",
  "title": "Match the matrices on the left to their descriptions on the right!",
  "body": " Match the matrices on the left to their descriptions on the right!      rotation by     A shear     projection onto the -axis     dilation by    "
},
{
  "id": "chapter-1-ws-9",
  "level": "1",
  "url": "chapter-1-ws-9.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 1.9, Linear Transforms",
  "body": " Worksheet 1.9, Linear Transforms    (1)   Indicate whether the statements are true or false.   If is a matrix then the map cannot be one‑to‑one.  If is a matrix then the map cannot be onto.  is one‑to‑one if and only if has only the trivial solution.     (2)   Construct the standard matrix of the linear transformation .     , where and .     is a vertical shear given by and .    Construct a matrix such that , where first reflects vectors across the line , then rotates them counterclockwise by radians about the origin, then reflects them across the line .      "
},
{
  "id": "chapter-2-ws-2",
  "level": "1",
  "url": "chapter-2-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 2.1, Matrix Operations",
  "body": " Worksheet 2.1, Matrix Operations    (1)   Written Explanation Exercise For square matrices , , is it always true that ? Explain why or why not.    (2)   Consider:     For what values (if any) of and :   do matrices and commute?  is the product equal to ?  is the product equal to the zero matrix ?     (3)   is an matrix that has elements where     For , how many pivot columns does have?    "
},
{
  "id": "chapter-2-ws-3",
  "level": "1",
  "url": "chapter-2-ws-3.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 2.2, Inverse of a Matrix",
  "body": " Worksheet 2.2, Inverse of a Matrix    (1)   Consider the sequence of row operations that reduce matrix to the identity.     Construct the elementary matrices , , .    (2)   Compute the inverse of the matrix , where . For what values of does the matrix have an inverse?       "
},
{
  "id": "chapter-2-ws-4",
  "level": "1",
  "url": "chapter-2-ws-4.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 2.3, Invertible Matrices",
  "body": " Worksheet 2.3, Invertible Matrices    (1)   Indicate whether the statements are true or false. is an matrix.    If for some in , then cannot be invertible.    If for some , the equation has more than one solution, then is invertible.    Every elementary matrix is invertible.      (2)   Let be an matrix. Which statements guarantee that is invertible?   Every vector in is in the span of the columns of .  has a solution for every .  The matrix can be row‑reduced to the identity matrix.  The range of the linear transformation is .     (3)   Two reasons that a matrix is not invertible are:   one column is a multiple of another column  one column is the sum of other columns   By inspection, identify which of the reasons above apply to the following matrices.            "
},
{
  "id": "chapter-2-ws-5",
  "level": "1",
  "url": "chapter-2-ws-5.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 2.5, Matrix Factorizations",
  "body": " Worksheet 2.5, Matrix Factorizations    (1)   Compute the LU factorization for .    (2)   Complete the LU factorization of and use it to solve .       "
},
{
  "id": "chapter-2-ws-6",
  "level": "1",
  "url": "chapter-2-ws-6.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 2.8, Subspaces of <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>",
  "body": " Worksheet 2.8, Subspaces of    (1)   has the reduced echelon form below. Construct a basis for and for .       (2)   Which of these are bases for their relevant spaces?          , where is arbitrary     , where is arbitrary        (3)   Construct a matrix with two pivotal columns so that is in the null space of .    (4)   Which of the following, if any, are subspaces of ? For those that are subspaces, what is the dimension of the subspace?                   The null space of       "
},
{
  "id": "chapter-2-ws-7",
  "level": "1",
  "url": "chapter-2-ws-7.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 2.9, Dimension and Rank",
  "body": " Worksheet 2.9, Dimension and Rank    (1)   True or false.   All matrices have a non‑trivial null space.  A matrix with two pivot columns can have a non‑trivial null space.  If the columns of a matrix are a basis for , the null space of is the zero vector.     (2)   is an matrix that has elements where     Suppose .   What is the rank of ?  Give a basis for the column space of .     "
},
{
  "id": "chapter-3-ws-2",
  "level": "1",
  "url": "chapter-3-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 3.1 to 3.3, Determinants",
  "body": " Worksheet 3.1 to 3.3, Determinants    (1)   Written Explanation Exercise Discuss the computational efficiency of computing by cofactor expansion and by row operations. Which method is computationally better if is and is large? (Compare how many arithmetic operations it takes.)    (2)   Use a determinant to identify all values of and such that the matrices are singular. Assume that and must be real numbers.                (3)   Let be a matrix whose determinant is equal to . Compute the value of the determinant       (4)   is the parallelogram determined by and . If , what is the area of the image of under the map ?    (5)   , where , is a linear transformation that first rotates vectors in counterclockwise by radians about the origin, then reflects them through the line . By inspection, what is the value of ? You should compute its value to check your answer.    "
},
{
  "id": "chapter-4-ws-2",
  "level": "1",
  "url": "chapter-4-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 4.9, Applications to Markov Chains",
  "body": " Worksheet 4.9, Applications to Markov Chains      (1)   Determine whether and are regular stochastic matrices.        (2)   Consider the Markov chain below.   A figure of a Markov chain.      What is the transition matrix? Calculate the steady‑state vector.       (3)   Suppose there are two cities, X and Y. Every year:   70% of the people from X stay in X, the remaining 30% move to Y.  40% of the people from Y stay in Y, the remaining 60% move to X.   The initial populations of X and Y are 100 and 200, respectively.   What is the stochastic matrix that represents this situation?  After a long period of time, what is the population in city X?      (4)   Written Explanation Exercise Let be a stochastic matrix with positive entries. Give two methods of finding the steady‑state solution.     (5)   A mouse lives in a maze that has at least three rooms. Each room is connected to at least one other room (in other words, every room is connected). Every hour the mouse moves to a connected room with equal probability.   Design any mouse maze and its corresponding transition matrix .  Is your regular stochastic?  In the long run, is there a room the mouse is more likely to be in? If so, which one?    Note: this problem is related to the PageRank problem that we explore later in this class.   "
},
{
  "id": "fig-tikz-markov",
  "level": "2",
  "url": "chapter-4-ws-2.html#fig-tikz-markov",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " A figure of a Markov chain.     "
},
{
  "id": "chapter-5-ws-2",
  "level": "1",
  "url": "chapter-5-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 5.1, Eigenvectors and Eigenvalues",
  "body": " Worksheet 5.1, Eigenvectors and Eigenvalues     (1)   Determine whether and are eigenvectors of . If so, what are their eigenvalues? Do not find the characteristic polynomial.        (2)   is a linear transformation in . Without constructing , identify one eigenvalue of .   reflects points across the line .  projects points onto one of the coordinate axes.        (3)   If with and is invertible, can you find an eigenvalue and eigenvector of ? Can have a zero eigenvalue?     (4)   Is an eigenvalue of ? Do not compute the characteristic polynomial.       "
},
{
  "id": "chapter-5-ws-3",
  "level": "1",
  "url": "chapter-5-ws-3.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 5.2, The Characteristic Equation",
  "body": " Worksheet 5.2, The Characteristic Equation     (1)   If possible, give an example of:    a matrix whose eigenvalues have non‑zero imaginary components.    a non‑zero matrix that is not triangular, but has a zero eigenvalue.       (2)   For what values of (if any) does have one real eigenvalue of algebraic multiplicity ?          (3)   The trace of , denoted , is the sum of the elements on the main diagonal of . If , , and , compute the eigenvalues of .     "
},
{
  "id": "chapter-5-ws-4",
  "level": "1",
  "url": "chapter-5-ws-4.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 5.3, Diagonalization",
  "body": " Worksheet 5.3, Diagonalization     (1)   Recall from lecture: a matrix is diagonalizable if it can be written as .   is a matrix whose columns are __________________.  is a __________________ matrix.  The elements on the main diagonal of are __________________.  A diagonal matrix is a matrix that __________________.  The geometric multiplicity of an eigenvalue is _____________________________________.  A matrix can be diagonalized when the geometric multiplicities of all eigenvalues _______________________________________________.      (2)   If possible, construct and so that . Eigenvalues of are given.                        (3)   If possible, give an example of:   a singular matrix in echelon form that can be diagonalized.  a singular matrix in echelon form that cannot be diagonalized.  an invertible matrix in echelon form that can be diagonalized.  an invertible matrix in echelon form that cannot be diagonalized.      (4)   Indicate whether the statements are true or false.   If is diagonalizable, then so is .  If is diagonalizable, then so is .      (5)   Give an example of an upper triangular matrix such that is its only eigenvalue and its eigenspace is -dimensional. Explain why the eigenspace has dimension .    "
},
{
  "id": "chapter-5-ws-5",
  "level": "1",
  "url": "chapter-5-ws-5.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 5.5, Complex Eigenvalues",
  "body": " Worksheet 5.5, Complex Eigenvalues     (1)   Indicate whether the statements are true or false.   There exists a real matrix with the eigenvalues and .  Every real matrix must have a real eigenvalue.      (2)   is a composition of a rotation and a scaling. Give the angle of rotation and the scale factor .        (3)   Matrix is a matrix that satisfies     where is the identity matrix. Compute the eigenvalues of .     (4)   Written Explanation Exercise Can a matrix have real eigenvalues and non‑real eigenvalues? If is an matrix and is odd, why does have a real eigenvalue?    "
},
{
  "id": "chapter-6-ws-2",
  "level": "1",
  "url": "chapter-6-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 6.1, Inner Product, Length, and Orthogonality",
  "body": " Worksheet 6.1, Inner Product, Length, and Orthogonality     (1)   Fill in the blanks.    The distance between the vector and the line spanned by is __________________.    If is the plane spanned by the vectors and , a basis of is given by .    If then _______ and _______.       (2)   is the set of all vectors of the form Which of the vectors below are in ?        (3)   Indicate whether the statements are true or false.    If , then is orthogonal to the rows of matrix .    If and are non‑zero orthogonal vectors, then they are linearly independent.      "
},
{
  "id": "chapter-6-ws-3",
  "level": "1",
  "url": "chapter-6-ws-3.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 6.2, Orthogonal Sets",
  "body": " Worksheet 6.2, Orthogonal Sets     (1)   Indicate whether the statements are true or false.    If the columns of an matrix are orthonormal, then the linear mapping preserves lengths.    If is a stochastic matrix, then the columns of have unit length.       (2)   Write as the sum of a vector parallel to and a vector perpendicular to .        (3)   Find the coordinates for in the subspace spanned by the orthogonal vectors and .          (4)   Give examples of the following.    A matrix in RREF such that and .        Two linearly independent vectors and in such that , where .     A matrix in RREF such that is spanned by .        A non‑zero vector whose projection onto is , where .         "
},
{
  "id": "chapter-6-ws-4",
  "level": "1",
  "url": "chapter-6-ws-4.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 6.3, Orthogonal Projections",
  "body": " Worksheet 6.3, Orthogonal Projections     (1)      Determine whether and are:    are linearly independent.    are mutually orthogonal.    are orthonormal.    span .    Is in ?  Compute the vector that most closely approximates .  Construct a vector that is in .      (2)   The set is an orthogonal basis for a subspace . Classify each set as a basis for , an orthogonal basis for , or not a basis for .          (3)   Indicate whether the statements are true or false.   If is in a subspace , the orthogonal projection of onto is .  If is orthogonal to and , then is also orthogonal to .      (4)   If possible, give an example of:   two linearly independent vectors that are orthogonal to .  a subspace such that .     "
},
{
  "id": "chapter-6-ws-5",
  "level": "1",
  "url": "chapter-6-ws-5.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 6.4, The Gram–Schmidt Process",
  "body": " Worksheet 6.4, The Gram–Schmidt Process     (1)   Compute the QR decomposition of      (2)   Consider the three vectors below.       The pair of vectors and are orthogonal. Which other pairs of vectors are orthogonal?    Use the vectors above, in that order, to construct three orthogonal vectors using the Gram–Schmidt process.      "
},
{
  "id": "chapter-6-ws-6",
  "level": "1",
  "url": "chapter-6-ws-6.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 6.5 and 6.6, Least‑Squares Problems, Applications to Linear Models",
  "body": " Worksheet 6.5 and 6.6, Least‑Squares Problems, Applications to Linear Models     (1)   Fill in the blanks. These questions concern the least‑squares solution to .   If , then __________________.  If the columns of are linearly independent, then __________________ .  If is in the column space of , then __________________.  If and is invertible, then __________________ .      (2)   These questions concern the least‑squares solution to . Indicate whether the statements are true or false.   The solution is chosen so that is as close as possible to .  If , then .  If the columns of are linearly independent, then the least‑squares solution is unique.        (3)   Use the QR decomposition to calculate the least‑squares solution to .        (4)   Four points in with coordinates are given in the table below.     Determine the coefficients and for the plane that best fits the data. (Hint: normal equations.)    "
},
{
  "id": "chapter-10-ws-2",
  "level": "1",
  "url": "chapter-10-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 10.2, The Steady‑State Vector and Page Rank",
  "body": " Worksheet 10.2, The Steady‑State Vector and Page Rank     (1)   A set of web pages link to each other according to the diagram below.   A figure of a transition diagram representing the connections between 5 web pages.        Create the transition matrix for this web.    Construct the Google matrix for this web. Use damping factor .    During an exam, to determine the page ranks of each page in the web you would be given the steady‑state vector of . Since you are not taking an exam right now, compute the steady‑state vector and page ranks of each page on the web. You may use software.    Hint: For a web with only two pages that are linked to each other, the steady state can be computed in MATLAB or Octave using:   Pstar=1\/2*[0 1;1 0]  K = 1\/2*ones(2)  p = 0.85  G = p*Pstar + (1-p)*K  G ∧ (100)   There are many free online Octave compilers.       (2)   Suppose and are real numbers in the open interval , and      Is stochastic? Is regular?  By inspection, what is one eigenvalue of ?  Compute the steady‑state vector of .  Compute .      (3)   Consider the dynamical system , for , where     The eigenvalues of are and . Analyze the long‑term behavior of the system. In particular, determine what tends to as .    "
},
{
  "id": "fig-tikz-pagerank",
  "level": "2",
  "url": "chapter-10-ws-2.html#fig-tikz-pagerank",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": " A figure of a transition diagram representing the connections between 5 web pages.     "
},
{
  "id": "chapter-7-ws-2",
  "level": "1",
  "url": "chapter-7-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 7.1, Diagonalization of Symmetric Matrices",
  "body": " Worksheet 7.1, Diagonalization of Symmetric Matrices     (1)   Construct a spectral decomposition for .        (2)   If possible, give an example of:    a matrix that is diagonalizable but not orthogonally diagonalizable.    a matrix that is orthogonally diagonalizable but not invertible.    any matrix that is diagonalizable but not invertible.         (3)   Indicate whether the statements are true or false.    If is orthogonally diagonalizable, then so is .    For any matrix , both and are symmetric matrices.       (4)   The only eigenvalues of are and .     Construct matrices and for the orthogonal diagonalization . Hints: you may want to use the Gram–Schmidt process to construct . Since is an orthogonal matrix, what do the lengths of each column of need to be?    "
},
{
  "id": "chapter-7-ws-3",
  "level": "1",
  "url": "chapter-7-ws-3.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 7.2, Quadratic Forms",
  "body": " Worksheet 7.2, Quadratic Forms     (1)   Indicate whether the statements are true or false.     for all real values of and .    The quadratic form is negative semidefinite.       (2)   Assume . Construct the matrix of the quadratic form, and classify the quadratic form          (3)   Make a change of variables that transforms the quadratic form into another quadratic form that has no cross‑product term.        (4)   Written Explanation Exercise Let , where is a symmetric matrix with eigenvalues . Explain how to find a change of variables so that becomes       "
},
{
  "id": "chapter-7-ws-4",
  "level": "1",
  "url": "chapter-7-ws-4.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 7.3, Constrained Optimization",
  "body": " Worksheet 7.3, Constrained Optimization     (1)   Indicate whether the statements are true or false.    The largest value of a positive definite quadratic form is the largest eigenvalue of .    The largest value of a positive definite quadratic form subject to is the largest value on the diagonal of .       (2)   Calculate the maximum and minimum values of the quadratic form subject to the constraint . Identify where this maximum is obtained.          (3)   Calculate the maximum and minimum values of the quadratic form subject to the constraints and .        (4)   If possible, give examples of the following, or write “not possible”.    A quadratic form that has maximum value , subject to the constraint .    A quadratic form that has a maximum value at two distinct locations, subject to the constraint .      "
},
{
  "id": "chapter-7-ws-5",
  "level": "1",
  "url": "chapter-7-ws-5.html",
  "type": "Handout",
  "number": "",
  "title": "Worksheet 7.4, The Singular Value Decomposition",
  "body": " Worksheet 7.4, The Singular Value Decomposition     (1)   Indicate whether the statements are true or false.   Every matrix has a singular value decomposition.  If is symmetric, then its factorization is also its SVD.  The maximum value of subject to is .      (2)   Construct the SVD of          (3)   Find a unit vector for which has maximum length.     Also compute the condition number of .     (4)   By inspection, construct an SVD of the diagonal matrix     The SVD of a matrix is not unique. How many different SVDs can you create from the matrix above?    "
},
{
  "id": "chapter-final-ws-2",
  "level": "1",
  "url": "chapter-final-ws-2.html",
  "type": "Handout",
  "number": "",
  "title": "Final Exam Review",
  "body": " Final Exam Review     (1)   Indicate whether the statements are possible (P) or impossible (I). For the statements that are possible, give an example.    is a linear transformation , where , , and is one‑to‑one but not onto.   is a negative semidefinite quadratic form, and , where is an eigenvector of .   is a square matrix, is an eigenvalue of , and .   is an matrix, for some , and .  The Gram–Schmidt algorithm applied to exactly vectors in produces an orthogonal basis with dimension .  Matrix is , has singular values and , and .      (2)   Vectors are linearly independent and span a subspace .   Fill in the circles next to the sets of vectors that span .                Fill in the circles next to the sets of vectors that form a basis for .                    (3)   Give an example of an matrix whose null space is equal to its column space.       (4)   Fill in the blanks.   If and for all there is at most one such that , where , how many pivot columns does have? _________  Consider the row operations that reduce to . Identify the elementary matrices and .   By inspection, and     For what values of , if any, is diagonalizable? _________  An eigenvector of is . What is the eigenvalue associated with ? _________      (5)   If possible, give an example of the following, or write “not possible”.   A matrix in RREF such that . The vectors and are a basis for the range of .   A non‑zero matrix in RREF such that and .      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
